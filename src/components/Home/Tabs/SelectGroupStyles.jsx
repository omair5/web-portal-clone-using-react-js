export const PropertyTypeOptions = [
    {
        label: 'HOMES', options: [
            { label: 'House', value: 'House' },
            { label: 'Flat', value: 'Flat' },
            { label: 'Upper Portion', value: 'Upper Portion' },
            { label: 'Lower Portion', value: 'Lower Portion' },
            { label: 'Farm House', value: 'Farm House' },
            { label: 'Room', value: 'Room' },
            { label: 'Penthouse', value: 'Penthouse' },
        ]
    },
    {
        label: 'PLOTS', options: [
            { label: 'Residential Plot', value: 'Residential Plot' },
            { label: 'Commercial Plot', value: 'Commercial Plot' },
            { label: 'Agricultural Land', value: 'Agricultural Land' },
            { label: 'Industrial Land', value: 'Industrial Land' },
            { label: 'Plot File', value: 'Plot File' },
            { label: 'Plot Form', value: 'Plot Form' },
        ]
    },
    {
        label: 'COMMERCIAL', options: [
            { label: 'Office', value: 'Office' },
            { label: 'Shop', value: 'Shop' },
            { label: 'Warehouse', value: 'Warehouse' },
            { label: 'Factory', value: 'Factory' },
            { label: 'Building', value: 'Building' },
            { label: 'Other', value: 'Other' }
        ]
    },
];
const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
export const formatGroupLabel = PropertyTypeOptions => (
    <div style={groupStyles} >
        <h4>{PropertyTypeOptions.label}</h4>
    </div >
);