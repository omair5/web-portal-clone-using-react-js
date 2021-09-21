const apiURL = 'http://localhost:3200/'
const GetAgentDeveloperDetail = async (type, id) => {
    const response = await fetch(`${apiURL}${type}/${type}/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}
export default GetAgentDeveloperDetail;