import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PartnerBg from './partner-bg.jpg'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: '58vh',
        width: '100%',
        backgroundImage: `url(${PartnerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        position: 'relative'

    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.5,
    },
    text: {
        width: '100%',
        height: '100%',
        color: 'white',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        '& h2': {
            marginTop: '15px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
            },
        },
        '& h1': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
            },
        },
    },
}));

const PartnerImage = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.overlay}>
            </div>

            <div className={classes.text}>
                <h1>
                    Well Established And Here For You
                </h1>

                <h2 className={classes.para}>
                    Our Property Partners In Pakistan Are Quality Property Solution Providers To Serve Our Customers Better
                </h2>
            </div>
        </div>
    );
}
export default React.memo(PartnerImage);