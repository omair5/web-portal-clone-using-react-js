const apiURL = 'http://localhost:3200/addproperty/homelinks1'

async function HomeGetHouseForSale(category, purpose, cityname) {
    const res = await fetch(`${apiURL}/${category}/${purpose}/${cityname}`)
    const { items, meta } = await res.json()
    const property_data = items.map((value) => ({
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
    return { property_data, meta }
}
export default HomeGetHouseForSale;