import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Button.css';

const AddPropertyButton = () => {
    return (
        <button className='btn'>
            <AddCircleOutlineIcon />
            <p>Add Property</p>
        </button>
    );
}
export default React.memo(AddPropertyButton)