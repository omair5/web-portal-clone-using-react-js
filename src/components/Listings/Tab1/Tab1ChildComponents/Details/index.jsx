import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import ClassIcon from '@material-ui/icons/Class';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles(theme => ({
    paper: {
        overflow: 'hidden',
        margin: '3vh 0px'
    },
    MainContainer: {
        margin: '15px auto'
    },
    icon: {
        fontSize: '20px',
        color: '#fcb812'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        "& p": {
            marginLeft: '10px',
            fontWeight: 'bolder',
        }
    },
    childContainer: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    DescriptionIcon: {
        fontSize: '20px',
        color: 'black',
    },
    IconAndDescription: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10px 0px',
        "& p": {
            paddingTop: '10px',
            textAlign: 'center'
        }
    },
    DescriptionIconContainer: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#fcb812",
            border: '2px solid #fcb812',
        }
    }
}));

const Details = ({ mainHeading, icon, description, multipleIcons }) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <Container maxWidth="lg" className={classes.MainContainer} >
                    <div className={classes.iconContainer}>
                        <ViewColumnOutlinedIcon className={classes.icon} />
                        <p>{mainHeading}</p>
                    </div>

                    <Grid container spacing={3} className={classes.childContainer}>
                        {description.map((value) => (
                            <Grid item xs={4} className={classes.IconAndDescription} key={uuidv4()}>
                                <span className={classes.DescriptionIconContainer}>{icon ? icon : <ClassIcon className={classes.DescriptionIcon} />}</span>
                                <p>{value}</p>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Paper>
        </>
    );
}

export default React.memo(Details);