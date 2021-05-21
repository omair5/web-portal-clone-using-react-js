let apiURL = 'http://localhost:3200/addproperty/getpropertydata/'
async function ExploreGetProperties(property_type) {
    apiURL = `http://localhost:3200/addproperty/getpropertydata/${property_type}`
    const response = await fetch(apiURL)
    const properties = await response.json()
    return properties.map(value => (
        {
            city: value.city.city_name,
            building_name: value.property_title,
            location: value.Location.location_name,
            area_size: value.land_area,
            area_unit: value.area_unit.area_name,
            beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshow'}`,
            bathrooms: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshow'}`,
            price: value.price,
            cover_image: value.title_image,
            propertyId: value.id,
        }
    ))
}
export default ExploreGetProperties;