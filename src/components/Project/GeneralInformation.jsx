import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';

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
    },
    show: {
        fontWeight: 'bold',
        marginLeft: '15px'
    }
});

const GeneralInformation = ({ generalInfo }) => {
    if (generalInfo.length !== 0) {
        var [{ year, floors, flooring, backup, bathrooms, bedrooms, parking }] = generalInfo
    }
    const classes = useStyles();

    return (
        <>
            {generalInfo.length === 0 ? null :
                <Container maxWidth="md" className={classes.mainContainer}>
                    <h4 className={classes.heading}>GENERAL INFORMATION</h4>
                    <Grid container spacing={3}>
                        <Grid container item xs={12} sm={6} lg={4}  >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> Built In Year: {!!year ? <span className={classes.show}>{year}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                        <Grid container item xs={12} sm={6} lg={4} >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> No Of Bedrooms: {!!bedrooms ? <span className={classes.show}>{bedrooms}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                        <Grid container item xs={12} sm={6} lg={4} >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> No Of Bathrooms: {!!bathrooms ? <span className={classes.show}>{bathrooms}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                        <Grid container item xs={12} sm={6} lg={4} >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> No Of Floors: {!!floors ? <span className={classes.show}>{floors}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                        <Grid container item xs={12} sm={6} lg={4} >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> Parking Slots: {!!parking ? <span className={classes.show}>{parking}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                        <Grid container item xs={12} sm={6} lg={4} >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> Electricity Backup: {!!backup ? <span className={classes.show}>{backup}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                        <Grid container item xs={12} sm={6} lg={4} >
                            <div className={classes.tickBox}>
                                <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                                <p> Flooring: {!!flooring ? <span className={classes.show}>{flooring}</span> : <span className={classes.show}>-</span>}</p>
                            </div>
                        </Grid>

                    </Grid>
                </Container>}
        </>
    );
}
export default React.memo(GeneralInformation);