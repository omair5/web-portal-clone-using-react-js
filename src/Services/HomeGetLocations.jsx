let apiURL = 'http://localhost:3200/home/city/Karachi'
async function HomeGetLocations(city_whose_location_to_be_fetched) {
    if (city_whose_location_to_be_fetched) {
        apiURL = `http://localhost:3200/home/city/${city_whose_location_to_be_fetched}`
    }
    else {
        apiURL = 'http://localhost:3200/home/city/Karachi'
    }
    const response = await fetch(apiURL)
    const [{ location }] = await response.json()
    return location.map(value => value.location_name)
}
export default HomeGetLocations;