const url = 'http://localhost:3200/home/advertise/'

const getAdvertisements = async (page) => {
    const response = await fetch(`${url}${page}`)
    const data = await response.json()
    return data.map((value) => (
        {
            advertisement_image: value.advertisement_img,
            redirect_link: value.company_link,
            alt_text: value.company_name
        }
    ))
}
export default getAdvertisements;
