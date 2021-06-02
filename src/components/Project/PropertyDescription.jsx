import React from 'react';
import parser from 'html-react-parser';

const PropertyDescription = ({ description }) => {
    return (
        <>
            {parser(description)}
        </>
    );
}
export default PropertyDescription;