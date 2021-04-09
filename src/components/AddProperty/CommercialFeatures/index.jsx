import React from 'react';
import GeneralInformation from './GeneralInformation';
import { makeStyles } from '@material-ui/core/styles';
import MainFeatures from './MainFeatures';
import BusinessAndCommunication from './BusinessAndCommunication';
import Utilities from '../HomeFeatures/Utilities';
import Facing from '../HomeFeatures/Facing';


const useStyles = makeStyles((theme) => ({
    mainHeading: {
        backgroundColor: 'rgb(76, 84, 85)',
        color: 'white',
        padding: '10px',
        margin: '30px 0px'
    },

}));


const CommercialFeatures = () => {
    const classes = useStyles();

    return (
        <>
            <h4 className={classes.mainHeading}>ADD FEATURES</h4>
            <GeneralInformation />
            <MainFeatures />
            <BusinessAndCommunication />
            <Utilities />
            <Facing />
        </>
    );
}
export default React.memo(CommercialFeatures);