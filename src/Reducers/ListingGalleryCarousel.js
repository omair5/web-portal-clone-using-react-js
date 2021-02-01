const initialState = false
const ListingGalleryCarousel = (state = initialState, action) => {
    switch (action.type) {
        case 'openCarouselGallery':
            return true
        case 'closeCarouselGallery':
            return false
        default:
            return state
    }
}
export default ListingGalleryCarousel;