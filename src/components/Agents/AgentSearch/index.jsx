import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AbaadeeButton from '../../FrequentlyUsed/Button';
import AutoCompleteTextField from '../../FrequentlyUsed/AutoCompleteTextField';

const AgentSearch = () => {
    return (
        <div >
            {/*CITY  */}
            <AutoCompleteTextField
                id="combo-box-demo1"
                label="City"
            />
            {/* LOCATION */}
            <AutoCompleteTextField
                id="combo-box-demo2"
                label="Location"
            />
            {/* Company Name */}
            <AutoCompleteTextField
                id="combo-box-demo3"
                label="Company Name"
            />

            {/* SEARCH BUTTON  */}
            <AbaadeeButton
                innerContent={'SEARCH'}
                buttonIcon={<SearchIcon style={{ fontSize: '25px' }} />}
            />
        </div >
    );
}

export default React.memo(AgentSearch)