const apiURL = 'http://localhost:3200/home/city'
async function HomeGetCities() {
    const response = await fetch(apiURL)
    const Home_Cities = await response.json()
    return Home_Cities.map(value => value.cityname)
}
export default HomeGetCities;