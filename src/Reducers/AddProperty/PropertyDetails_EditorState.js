import { EditorState } from 'draft-js';
const initialstate = EditorState.createEmpty()
const PropertyDetails_EditorState = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_editor_state':
            return action.payload
        case 'clear_property_details_editor_state':
            return EditorState.createEmpty()
        default:
            return state
    }
}
export default PropertyDetails_EditorState;