import React, { useEffect } from 'react';
import Select from 'react-select';
import { colourStyles } from './ColourStyles'
import { useDispatch, useSelector } from 'react-redux'


const data = [
    { label: 'Office', value: 'Office' },
    { label: 'Shop', value: 'Shop' },
    { label: 'Warehouse', value: 'Warehouse' },
    { label: 'Factory', value: 'Factory' },
    { label: 'Building', value: 'Building' },
    { label: 'Other', value: 'Other' }
]


const Commercial = () => {
    const dispatch = useDispatch()
    const CommercialSubType = useSelector(state => state.SubPropertyType)

    useEffect(() => {
        dispatch({ type: 'clear_property_sub_type' })
    }, [dispatch])

    const HandleCommercialSubType = (selectedOption) => {
        dispatch({ type: 'set_sub_type_commercial', payload: selectedOption })
    }

    return (
        <>
            <Select
                value={CommercialSubType}
                onChange={HandleCommercialSubType}
                isSearchable={false}
                options={data}
                placeholder="Select SubType Of Commercial*"
                styles={colourStyles}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </>
    );
}
export default React.memo(Commercial);