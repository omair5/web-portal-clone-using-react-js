const apiURL = 'http://localhost:3200/developer/getdevelopername'

const HomeFetchDeveloperName = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data.map((value) => (
        { value: value.name, label: value.name }
    ))
}
export default HomeFetchDeveloperName