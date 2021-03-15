export const colourStyles = {
    // THIS IS MAIN SELECT BOX
    control: (base) => ({
        ...base,
        '&:hover': { borderColor: 'rgb(59, 70, 86)' }, // border style on hover
        border: 'none',
        borderBottom: '2px solid lightgray', // default border color
        boxShadow: 'none', // no box-shadow
        borderRadius: 'none',
    }),
    // THIS IS PLACEHOLDER BOX
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: 'rgb(59, 70, 86)',
            fontSize: '12px',
            fontWeight: 'bold',
        }
    },
    // THIS IS OPTION BOX
    menuList: base => ({
        ...base,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: 'white'
    }),
    // THIS IS FOR OPTIONS
    option: (styles, { isFocused }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#fcb812" : null,
            color: "white",
            fontSize: '14px',
        };
    },
    // THIS IS FOR VALUE
    singleValue: styles => ({ ...styles, fontSize: '14px', fontWeight: 'bold', color: 'rgb(59, 70, 86)' }),

    // THIS IS VALUE CONTAINER
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '0px'
    }),
    input: (styles) => {
        return {
            ...styles,
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'rgb(59, 70, 86)'
        };
    },
}