import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropertyDetails from './Tab1ChildComponents/PropertyDetails';
import Gallery from './Tab1ChildComponents/Gallery';
import Details from './Tab1ChildComponents/Details';
import KingBedIcon from '@material-ui/icons/KingBed';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Map from './Tab1ChildComponents/Map';



const useStyles = makeStyles(theme => ({
    DescriptionIcon: {
        fontSize: '25px',
        color: 'black',
    },
}));

const MainSection = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" >
                <Grid container spacing={3}>
                    {/* COLUMN 1 */}
                    <Grid item xs={12} md={6} >
                        <PropertyDetails />
                        {/* FOR BEDS */}
                        <Details
                            mainHeading='Beds'
                            icon={<KingBedIcon className={classes.DescriptionIcon} />}
                            description={['3']}
                        />
                        {/* FOR AREA UNIT */}
                        <Details
                            mainHeading='Area Unit'
                            icon={<SquareFootIcon className={classes.DescriptionIcon} />}
                            description={['Square Feet']}
                        />
                        {/* FOR TOTAL ROOMS */}
                        <Details
                            mainHeading='Total Rooms'
                            icon={<MeetingRoomIcon className={classes.DescriptionIcon} />}
                            description={['5']}
                        />
                        {/*FOR FEATURES  */}
                        <Details
                            mainHeading='Features'
                            description={features}
                        />
                    </Grid>


                    {/* COLUMN 2 */}
                    <Grid item xs={12} md={6} >
                        <Gallery />
                        <Map />
                        {/*FOR FACILITIES  */}
                        <Details
                            mainHeading='Facilities'
                            description={facilities}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default React.memo(MainSection);

const features = [
    'All Features',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
]

const facilities = [
    'All Features',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
    'Balcony / Terrace',
    'Basement',
    'Central Air Conditioning',
    'Central Heating',
    'Double Glazed Windows',
]
