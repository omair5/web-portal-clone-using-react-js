const apiURL = 'http://localhost:3200/home/getpartner'
const GetPartners = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
}
export default GetPartners;