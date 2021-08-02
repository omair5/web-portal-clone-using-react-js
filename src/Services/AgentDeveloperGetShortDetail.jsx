const apiURL = 'http://localhost:3200/developer/'

const AgentDeveloperGetShortDetail = async (value) => {
    const reponse = await fetch(`${apiURL}${value}`)
    const data = await reponse.json()
    return data
}
export default AgentDeveloperGetShortDetail;