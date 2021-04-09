import React from 'react';
import Select from 'react-select';
import { colourStyles } from './ColourStyles'

const data = [
    { label: 'Office', value: 'Office' },
    { label: 'Shop', value: 'Shop' },
    { label: 'Warehouse', value: 'Warehouse' },
    { label: 'Factory', value: 'Factory' },
    { label: 'Building', value: 'Building' },
    { label: 'Other', value: 'Other' }
]


const Commercial = () => {
    return (
        <>
            <Select
                // value={selectedCity}
                // onChange={HandleCitySelect}
                isSearchable={false}
                options={data}
                placeholder="Select SubType Of Commercial"
                styles={colourStyles}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </>
    );
}
export default React.memo(Commercial);