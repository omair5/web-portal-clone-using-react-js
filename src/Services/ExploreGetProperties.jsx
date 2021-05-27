let apiURL = 'http://localhost:3200/addproperty/getpropertydata/'
async function ExploreGetProperties(property_type) {
    apiURL = `http://localhost:3200/addproperty/getpropertydata/${property_type}`
    const response = await fetch(apiURL)
    const { items, links, meta } = await response.json()

    const buy_response = items.map(value => (
        {
            city: value.city.city_name,
            building_name: value.property_title,
            location: value.Location.location_name,
            area_size: value.land_area,
            area_unit: value.area_unit.area_name,
            beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshowbeds'}`,
            bathrooms: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshowbaths'}`,
            price: value.price,
            cover_image: value.title_image,
            propertyId: value.id,
        }
    ))
    return { buy_response, links, meta }
}
export default ExploreGetProperties;