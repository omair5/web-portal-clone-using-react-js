import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
    mainContainer: {
        padding: '0px 0px 30px',
    },
    tickBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& p": {
            marginLeft: '5px',
            textTransform: 'capitalize',
        }
    },
    tickColor: {
        color: '#fcb812'
    },
    heading: {
        padding: '20px 0px'
    }
});

const BusinessAndCommunication = ({ business_and_communication }) => {
    const classes = useStyles();

    return (
        <>
            {business_and_communication.length === 0 ? null :
                <Container maxWidth="md" className={classes.mainContainer}>
                    <h4 className={classes.heading}>BUSINESS AND COMMUNICATION</h4>
                    <Grid container spacing={3} >
                        {business_and_communication.map(value => (
                            <Grid container item xs={12} sm={6} lg={4} key={uuidv4()} >
                                <div className={classes.tickBox}>
                                    <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                    <p> {value}</p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </>
    );
}
export default React.memo(BusinessAndCommunication);