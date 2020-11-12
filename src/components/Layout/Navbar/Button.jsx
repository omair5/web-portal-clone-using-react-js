import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='sign-up'>
            <button className='btn add-property-btn'><AddCircleOutlineIcon />Add Property</button>
        </Link>
    );
}