const apiURL = 'http://localhost:3200/home/getpopup'
const HomeGetPopUp = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
}
export default HomeGetPopUp;