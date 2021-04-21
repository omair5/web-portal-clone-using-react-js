import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const dispatch = useDispatch()
    const HomeSubType = useSelector(state => state.SubPropertyType)

    useEffect(() => {
        dispatch({ type: 'clear_property_sub_type' })
    }, [dispatch])

    const HandleHomeSubType = (selectedOption) => {
        dispatch({ type: 'set_sub_type_home', payload: selectedOption })
    }


    return (
        <>
            <Select
                value={HomeSubType}
                onChange={HandleHomeSubType}
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