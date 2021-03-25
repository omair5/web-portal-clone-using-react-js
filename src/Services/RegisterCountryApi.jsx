async function RegisterCountryApi() {
    const apiURL = 'http://localhost:3200/home/country'
    const response = await fetch(apiURL)
    const countries = await response.json()
    return countries.map(value => value.country_name)
}
export default RegisterCountryApi;