export const PropertyTypeOptions = [
    {
        label: 'HOMES', options: [
            { label: 'All Homes', value: 'All Homes' },
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
            { label: 'All Plots', value: 'All Plots' },
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
            { label: 'All Commercial', value: 'All Commercial' },
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
const labelStyles = {
    borderBottom: '1px solid gray',
    padding: '2px'
}
export const formatGroupLabel = PropertyTypeOptions => (
    <div style={groupStyles} >
        <h4 style={labelStyles}>{PropertyTypeOptions.label}</h4>
    </div >
);