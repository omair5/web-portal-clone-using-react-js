const apiURL = 'http://localhost:3200/home/featureagency'
const HomeGetFeatureAgencies = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
}
export default HomeGetFeatureAgencies;