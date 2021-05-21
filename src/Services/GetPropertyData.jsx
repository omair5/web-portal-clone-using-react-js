let apiURL = 'http://localhost:3200/addproperty/databyid/'
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
// TO CONVERT PRICE IN TO PKR
function numDifferentiation(val) {
    if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + ' Crore';
    } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + ' Lakh';
    }
    else if (val >= 1000) val = (val / 1000).toFixed(0) + ' Thousand';
    return val;
}
async function GetPropertyData(Property_Id) {
    apiURL = `http://localhost:3200/addproperty/databyid/${Property_Id}`
    const response = await fetch(apiURL)
    const property_data = await response.json()
    return property_data.map(value => (
        {
            location: value.Location.location_name,
            area_unit: value.area_unit.area_name,
            city: value.city.city_name,
            created_at: `${monthNames[new Date(value.createdat).getUTCMonth()]} ${new Date(value.createdat).getUTCDate()},${new Date(value.createdat).getUTCFullYear()}`,
            amenities: value.feature,
            general_info: value.general_info,
            images: value.images,
            land_area: value.land_area,
            price: numDifferentiation(32000),
            property_category: value.property_category.property_category_name,
            property_description: value.property_description,
            property_title: value.property_title,
            property_type: value.property_type.property_type_name,
            purpose: value.purpose,
            beds: value.general_info[0].bedrooms,
            baths: value.general_info[0].bathrooms,
        }
    ))

}
export default GetPropertyData;