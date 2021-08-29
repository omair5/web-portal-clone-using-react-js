import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import ChangePasswordField from './ChangePasswordField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    mainHeading: {
        color: 'rgb(59, 70, 86)'
    },
    paperContainer: {
        minWidth: '400px',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainContainer: {
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    field: {
        width: '100%',
        margin: 'auto'
    },
    buttonContainer: {
        minWidth: '100%',
        display: 'block',
        margin: '30px auto',
        padding: '20px',
        outline: 'none',
        border: 'none',
        fontSize: '15px',
        fontWeight: 'bold',
        borderRadius: '7px',
        backgroundColor: '#fcb812',
        cursor: 'pointer',
        color: 'rgb(59, 70, 86)',
        transition: 'all 0.5s ease',
        "&:hover": {
            color: 'white',
            transform: 'scale(1.03)'
        }
    },
    helperText:{
        color:'red',
        textAlign:'center',
        fontSize:'15px'
    }
});


const ChangePassword = () => {
    const classes = useStyles();
    const [showPassword, setshowPassword] = useState({ currentPassword: false, newPassword: false, confirmPassword: false })
    const [fieldValues, setfieldValues] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
    const [confirmatonError, setconfirmatonError] = useState(false)

    const handleClickShowPassword = (keyname) => {
        setshowPassword({ ...showPassword, [keyname]: !showPassword[keyname] })
    }

    const HandleValueChange = (e) => {
        setfieldValues({ ...fieldValues, [e.target.name]: e.target.value })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (fieldValues.newPassword !== fieldValues.confirmPassword) {
            setconfirmatonError(true)
        }
        else {
            setconfirmatonError(false)
            console.log(fieldValues)
            setfieldValues({ currentPassword: '', newPassword: '', confirmPassword: '' })
        }

    }

    return (
        <>
            <Layout FooterDisplay={true}>
                <div className={classes.mainContainer}>
                    <Paper className={classes.paperContainer}>
                        <h2 className={classes.mainHeading}>CHANGE PASSWORD</h2>
                        <form onSubmit={HandleSubmit}>
                            <div className={classes.field}>
                                <ChangePasswordField
                                    fieldName='Current Password'
                                    showpassword={showPassword.currentPassword}
                                    handleClickShowPassword={handleClickShowPassword}
                                    name='currentPassword'
                                    value={fieldValues.currentPassword}
                                    handleChange={HandleValueChange}
                                />
                            </div>

                            <div className={classes.field}>
                                <ChangePasswordField
                                    fieldName='New Password'
                                    showpassword={showPassword.newPassword}
                                    handleClickShowPassword={handleClickShowPassword}
                                    name='newPassword'
                                    value={fieldValues.newPassword}
                                    handleChange={HandleValueChange}
                                />
                            </div>

                            <div className={classes.field}>
                                <ChangePasswordField
                                    fieldName='Confirm Password'
                                    showpassword={showPassword.confirmPassword}
                                    handleClickShowPassword={handleClickShowPassword}
                                    name='confirmPassword'
                                    value={fieldValues.confirmPassword}
                                    handleChange={HandleValueChange}
                                />
                            </div>

                            {confirmatonError && <FormHelperText className={classes.helperText}>Password Does Not Match!</FormHelperText>}
                            <button type='submit' className={classes.buttonContainer}>MODIFY</button>
                        </form>
                    </Paper>
                </div>
            </Layout>
        </>
    );
}

export default React.memo(ChangePassword);