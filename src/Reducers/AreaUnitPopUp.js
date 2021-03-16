let initialstate = false
const AreaUnitPopUp = (state = initialstate, action) => {
    switch (action.type) {
        case 'open_area_unit_pop_up':
            return true
        case 'close_area_unit_pop_up':
            return false
        default:
            return state
    }
}
export default AreaUnitPopUp;