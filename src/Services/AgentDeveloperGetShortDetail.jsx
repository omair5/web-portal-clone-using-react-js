const apiURL = 'http://localhost:3200/'

const AgentDeveloperGetShortDetail = async (item,value) => {
    const reponse = await fetch(`${apiURL}${item}/${value}`)
    const data = await reponse.json()
    return data
}
export default AgentDeveloperGetShortDetail;
// THIS API IS USED BY DISCOVER NEW PROJECTS ON HOME / PROJECT SHORT API IN EXPLORE PAGE / AGENT SHORT API / DEVELOPER SHORT API