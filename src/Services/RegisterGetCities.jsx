async function RegisterGetCities() {
    const apiURL = 'http://localhost:3200/home/city'
    const response = await fetch(apiURL)
    const cities = await response.json()
    return cities.map(value => value.city_name)
}
export default RegisterGetCities;