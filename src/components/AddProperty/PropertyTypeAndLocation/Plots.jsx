import React from 'react';
import Select from 'react-select';
import { colourStyles } from './ColourStyles'

const data = [
    { label: 'Residential Plot', value: 'Residential Plot' },
    { label: 'Commercial Plot', value: 'Commercial Plot' },
    { label: 'Agricultural Land', value: 'Agricultural Land' },
    { label: 'Industrial Land', value: 'Industrial Land' },
    { label: 'Plot File', value: 'Plot File' },
    { label: 'Plot Form', value: 'Plot Form' },
]


const Plots = () => {
    return (
        <>
            <Select
                // value={selectedCity}
                // onChange={HandleCitySelect}
                isSearchable={false}
                options={data}
                placeholder="Select SubType Of Plot"
                styles={colourStyles}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </>
    );
}
export default React.memo(Plots);



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Paper from '@material-ui/core/Paper';
// import { v4 as uuidv4 } from 'uuid';


// const data = ['Residential Plot', 'Commercial Plot', 'Agricultural Land', 'Industrial Land', 'Plot File', 'Plot Form']
// const useStyles = makeStyles((theme) => ({
//     radio: {
//         '&$checked': {
//             color: 'rgb(59, 70, 86)'
//         }
//     },
//     checked: {},
//     RadioGroup: {
//         marginLeft: '20px'
//     },
//     RadioLabel: {
//         fontSize: '17px',
//         "& svg": {
//             fontSize: '20px'
//         }
//     },
//     paper: {
//         maxWidth: '76%',
//         marginLeft: 'auto',
//         padding: '10px 0px',
//         borderRadius: '10px'
//     }
// }));

// const Plots = () => {
//     const classes = useStyles();
//     return (
//         <>
//             <Paper elevation={3} className={classes.paper}>
//                 <RadioGroup aria-label="PROPERTY TYPE" name="PROPERTY TYPE" row className={classes.RadioGroup}>
//                     {data.map(data => (
//                         <FormControlLabel
//                             value={data}
//                             control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
//                             label={data}
//                             key={uuidv4()}
//                             classes={{
//                                 label: classes.RadioLabel
//                             }} />
//                     ))}
//                 </RadioGroup>
//             </Paper>
//         </>
//     );
// }
// export default React.memo(Plots);