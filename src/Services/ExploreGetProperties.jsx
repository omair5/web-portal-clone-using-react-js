let apiURL = 'http://localhost:3200/addproperty/getpropertydata/'
async function ExploreGetProperties(property_type) {
    apiURL = `http://localhost:3200/addproperty/getpropertydata/${property_type}`
    const response = await fetch(apiURL)
    const properties = await response.json()
    return properties.map(value => (
        {
            city: value.city_id.city_name,
            building_name: value.property_title,
            location: value.Location_id.location_name,
            area_size: value.land_area,
            area_unit: value.area_unit_id.area_name,
            beds: value.bed_id.beds_quantity,
            price: value.price,
            cover_image: value.images.map(value => value.imageurl),
        }
    ))
}
export default ExploreGetProperties;