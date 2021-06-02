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
// API CALL
async function GetPropertyData(Property_Id) {
    apiURL = `http://localhost:3200/addproperty/databyid/${Property_Id}`
    const response = await fetch(apiURL)
    const property_data = await response.json()
    console.log('this is property details ', property_data)
    return property_data.map(value => (
        {
            location: value.Location.location_name,
            area_unit: value.area_unit.area_name,
            city: value.city.city_name,
            created_at: `${monthNames[new Date(value.createdat).getUTCMonth()]} ${new Date(value.createdat).getUTCDate()},${new Date(value.createdat).getUTCFullYear()}`,
            general_info: value.general_info,
            images: value.images,
            land_area: value.land_area,
            price: numDifferentiation(value.price),
            property_category: value.property_category.property_category_name,
            property_description: value.property_description,
            property_title: value.property_title,
            property_type: value.property_type.property_type_name,
            purpose: value.purpose,
            beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshowbeds'}`,
            baths: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshowbaths'}`,
            main_features: value.feature.filter(value => value.Category_name === "main_feature").map(value => value.feature_name.replace('_', ' ')),
            utilities: value.feature.filter(value => value.Category_name === "utilities").map(value => value.feature_name.replace('_', ' ')),
            facing: value.feature.filter(value => value.Category_name === "facing").map(value => value.feature_name.replace('_', ' ')),
            business_and_communication: value.feature.filter(value => value.Category_name === "business_and_communication").map(value => value.feature_name.replace('_', ' ')),
            latitude: value.latitude,
            longitude: value.longitude,
            property_id: value.id,
            user: value.userid
        }
    ))
}
export default GetPropertyData;