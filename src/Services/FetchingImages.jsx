let apiURL = 'http://localhost:3200/addproperty/image/'

async function FetchingImages(imageName) {
    if (imageName) {
        apiURL = `http://localhost:3200/addproperty/image/${imageName}`
        const response = await fetch(apiURL)
        return response.url
    }
}
export default FetchingImages;