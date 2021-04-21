const initialstate = {
    Possession: false,
    Corner: false,
    Park_Facing: false,
    Boundary_Wall: false,
    Extra_Land: false,
    Main_Boulevard: false,
    File: false,
}

const Plot_Main_Features = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_plot_main_features':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_plot_main_features':
            return {
                Possession: false,
                Corner: false,
                Park_Facing: false,
                Boundary_Wall: false,
                Extra_Land: false,
                Main_Boulevard: false,
                File: false,
            }
        default:
            return state
    }
}
export default Plot_Main_Features;