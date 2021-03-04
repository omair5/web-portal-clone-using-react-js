import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GeneralStyles } from './GeneralStyles'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => (GeneralStyles));
const uselocalStyles = makeStyles((theme) => ({
    RadioGroup: {
        backgroundColor: 'yellow',
        maxWidth: '60%',
        marginLeft: 'auto',
    },
    groupContainer: {
        backgroundColor: 'green',

    },
    paper: {
        // padding: '5px 10px',
    },
    label: {
        backgroundColor: 'orange',
        padding: '5px 0px',
        width: '100%',
        marginLeft: '0px'


    }
}));


const Homes = () => {
    const classes = useStyles()
    const localClasses = uselocalStyles()
    return (
        <RadioGroup aria-label="homes" name="homes" row className={localClasses.RadioGroup}>
            <Grid container spacing={2} className={localClasses.groupContainer}>
                <Grid item xs={4}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="House"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="House"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="Flat"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="Flat"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>

                <Grid item xs={5}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="Upper Portion"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="Upper Portion"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>

                <Grid item xs={5}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="Lower Portion"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="Lower Portion"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="Farm House"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="Farm House"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="Room"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="Room"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>


                <Grid item xs={4}>
                    <Paper className={localClasses.paper}>
                        <FormControlLabel
                            value="Penthouse"
                            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                            label="Penthouse"
                            className={localClasses.label}
                            classes={{
                                label: classes.RadioLabel
                            }} />
                    </Paper>
                </Grid>

            </Grid>
        </RadioGroup >
    );
}

export default React.memo(Homes);