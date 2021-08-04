import React from 'react';
import parser from 'html-react-parser';

const DeveloperDescription = ({ description }) => {
    return (
        <>
            {parser(description)}
        </>
    );
}
export default React.memo(DeveloperDescription);