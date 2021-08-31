const apiURL = 'http://localhost:3200/agent/agentname'

const GetAgentName = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data.map((value) => (
        { label: value.name, value: value.name }
    ))
}
export default GetAgentName