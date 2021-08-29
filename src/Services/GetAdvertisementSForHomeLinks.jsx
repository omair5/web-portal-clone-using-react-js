const GetAdvertisementsForHomeLinks = async (pageName, adPosition) => {
    const apiURL = `http://localhost:3200/home/advertise_for_popular?page_name=${pageName}&position=${adPosition}`
    const response = await fetch(apiURL)
    const data = await response.json()
    console.log('these are adds', data)
    return data
}
export default GetAdvertisementsForHomeLinks