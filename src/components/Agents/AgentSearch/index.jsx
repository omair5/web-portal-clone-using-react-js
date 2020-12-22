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
                style={{ margin: '7px 0px' }}
            />
            {/* LOCATION */}
            <AutoCompleteTextField
                id="combo-box-demo2"
                label="Location"
                style={{ margin: '7px 0px' }}
            />
            {/* Company Name */}
            <AutoCompleteTextField
                id="combo-box-demo3"
                label="Company Name"
                style={{ margin: '7px 0px' }}
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