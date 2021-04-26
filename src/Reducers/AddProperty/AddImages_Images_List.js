const initialstate = []
const AddImages_Images_List = (state = initialstate, action) => {
    switch (action.type) {
        case 'gallery_images_list':
            return action.payload
        case 'clear_gallery_images_list':
            return []
        default:
            return state
    }
}
export default AddImages_Images_List;