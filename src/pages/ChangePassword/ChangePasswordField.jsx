import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles({
    mainContainer: {
        width: '100%',
        margin: '15px auto',
    },
    field:{
        fontSize:'20px'
    },
    label:{
        color:'rgb(59, 70, 86)',
        fontSize:'15px',
    }
});

const ChangePasswordField = ({ showpassword, handleClickShowPassword, name, value, handleChange, fieldName }) => {
    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.mainContainer}>
            <InputLabel className={classes.label} >{fieldName}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showpassword ? 'text' : 'password'}
                value={value}
                name={name}
                onChange={handleChange}
                required
                variant='outlined'
                className={classes.field}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword(name)}
                            edge="end"
                        >
                            {showpassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={130}
            />
        </FormControl>
    );
}
export default React.memo(ChangePasswordField);