const apiURL = 'http://localhost:3200/developer/'
const GetAgentDeveloperDetail = async (type, id) => {
    const response = await fetch(`${apiURL}${type}/${id}`)
    const data = await response.json()
    return data
}
export default GetAgentDeveloperDetail;