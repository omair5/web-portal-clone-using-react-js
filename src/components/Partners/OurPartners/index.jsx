import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SkeletonForPartnerLogo from '../../SkeletonForPartnerLogo';
import { v4 as uuidv4 } from 'uuid';


// STYLES
const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '20px 0px',
        "& h1": {
            margin: '0px 0px 35px',
            textAlign: 'center',
            color: 'rgb(59, 70, 86)',
            '& span': {
                borderBottom: '5px solid #fcb812'
            }
        }
    },
    PartnersLogo: {
        height: '75%',
        width: '75%',
        display: 'block',
        margin: 'auto',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        "&:hover": {
            transform: 'scale(1.2)'
        }
    }
}));

const OurPartners = ({ partners_list }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.MainContainer} >
                <h1><span>MEET OUR PARTNERS</span></h1>
                <Container maxWidth="lg">
                    <Grid container  >
                        {
                            partners_list.length === 0 ?
                                Array(8).fill().map(() => (
                                    <SkeletonForPartnerLogo key={uuidv4()} />
                                ))
                                :
                                partners_list.reverse().map(value => (
                                    <Grid item xs={6} sm={3} key={uuidv4()}>
                                        <a href={value.p_link} target='_blank' rel="noreferrer" >
                                            <img src={value.p_image} alt="capital" className={classes.PartnersLogo} />
                                        </a>
                                    </Grid>
                                ))
                        }
                    </Grid>
                </Container>
            </div>
        </>
    );
}
export default React.memo(OurPartners);