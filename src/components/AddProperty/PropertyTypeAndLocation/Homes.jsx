import React from 'react';
import Select from 'react-select';
import { colourStyles } from './ColourStyles'

const data = [
    { label: 'House', value: 'House' },
    { label: 'Flat', value: 'Flat' },
    { label: 'Upper Portion', value: 'Upper Portion' },
    { label: 'Lower Portion', value: 'Lower Portion' },
    { label: 'Farm House', value: 'Farm House' },
    { label: 'Room', value: 'Room' },
    { label: 'Penthouse', value: 'Penthouse' },
]


const Homes = () => {
    return (
        <>
            <Select
                // value={selectedCity}
                // onChange={HandleCitySelect}
                isSearchable={false}
                options={data}
                placeholder="Select SubType Of Homes"
                styles={colourStyles}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </>
    );
}
export default React.memo(Homes);