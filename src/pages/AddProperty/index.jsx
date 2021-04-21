import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import Container from '@material-ui/core/Container';
import PropertyTypeAndLocation from '../../components/AddProperty/PropertyTypeAndLocation';
import { makeStyles } from '@material-ui/core/styles';
import PropertyDetails from '../../components/AddProperty/PropertyDetails';
import AddImages from '../../components/AddProperty/AddImages';
import HomeFeatures from '../../components/AddProperty/HomeFeatures';
import PlotFeatures from '../../components/AddProperty/PlotFeatures';
import CommercialFeatures from '../../components/AddProperty/CommercialFeatures';
import { useSelector } from 'react-redux'
import HouseIcon from '@material-ui/icons/House';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px auto'
    },
    buttonContainer: {
        minWidth: '20%',
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
    banner: {
        backgroundColor: 'rgb(76, 84, 85)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '15px',
        paddingBottom: '15px'
    },
    iconContainer: {
        backgroundColor: '#fcb812',
        width: '80px',
        height: '80px',
        borderRadius: '5px',
        marginRight: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        color: 'white',
        "& h4": {
            color: '#c9c9c9'
        }
    }
}));
const AddProperty = () => {
    const classes = useStyles();
    const propertyDetails = useSelector(state => state.PropertyDetails)

    const [check, setcheck] = useState(true)
    setTimeout(() => {
        setcheck(false)
    }, 3000)

    console.log(check)

    return (
        <Layout FooterDisplay={true}>

            {/* BANNER */}
            <Container maxWidth="md" className={`${classes.mainContainer} ${classes.banner}`}>
                <div className={classes.iconContainer}>
                    <HouseIcon style={{ fontSize: "55px" }} />
                </div>
                <div className={classes.textContainer}>
                    <h2>ADD YOUR PROPERTY</h2>
                    <h4>Enter your property details below to get it listed on our portal</h4>
                </div>
            </Container>

            {/* ADD PROPERTY FORM */}
            <Container maxWidth="md" className={classes.mainContainer}>
                <PropertyTypeAndLocation />
                <PropertyDetails />
                <AddImages />
                {
                    (() => {
                        switch (propertyDetails.propertyType) {
                            case 'Homes':
                                return <HomeFeatures />

                            case 'Plots':
                                return <PlotFeatures />

                            case 'Commercial':
                                return <CommercialFeatures />

                            default:
                                break;
                        }
                    })()

                }
                <button className={classes.buttonContainer}>SUBMIT PROPERTY</button>
            </Container>

            {/* GOTO TOP BUTTON */}
            <GoToTop />
        </Layout>);
}
export default React.memo(AddProperty);