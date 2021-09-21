let initialState = true
const Explore_RunThisEffectOnMount_ForRent = (state = initialState, action) => {
    switch (action.type) {
        case 'run_useeffect_on_mount_for_rent_tab':
            return true
        case 'do_not_run_useeffect_on_mount_for_rent_tab':
            return false
        default:
            return state
    }
}
export default Explore_RunThisEffectOnMount_ForRent;