import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux'
import HouseIcon from '@material-ui/icons/House';
import axios from 'axios';


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
    const dispatch = useDispatch()
    // property type & location
    const property_purpose_type = useSelector(state => state.PropertyDetails)
    const sub_property_type = useSelector(state => state.SubPropertyType)
    const city = useSelector(state => state.AddProperty_Selected_City)
    const location = useSelector(state => state.AddProperty_Selected_Location)
    // property details
    const property_title = useSelector(state => state.PropertyDetails_Title)
    const property_description = useSelector(state => state.PropertyDetails_Description)
    const price = useSelector(state => state.PropertyDetails_Price)
    const land_area = useSelector(state => state.PropertyDetails_LandArea)
    const area_unit_name = useSelector(state => state.PropertyDetails_AreaUnit)
    // Images
    const images = useSelector(state => state.AddImages_Images_List)
    // home features
    const home_general_info_inputs = useSelector(state => state.Home_General_Info_Inputs)
    const Home_Flooring = useSelector(state => state.Home_Flooring)
    const Home_Backup = useSelector(state => state.Home_Backup)
    const home_main_features = useSelector(state => state.Home_Main_Features)
    const home_business_and_communication = useSelector(state => state.Home_business_And_Communication)
    // plot features
    const plot_main_features = useSelector(state => state.Plot_Main_Features)
    // commercial features
    const commercial_general_info_inputs = useSelector(state => state.Commercial_General_Info_Inputs)
    const commercial_flooring = useSelector(state => state.Commercial_Flooring)
    const commercial_backup = useSelector(state => state.Commercial_Backup)
    const commercial_main_features = useSelector(state => state.Commercial_Main_Features)
    const commercial_business_and_communication = useSelector(state => state.Commercial_business_And_Communication)

    const utilities = useSelector(state => state.Home_utilities)
    const facing = useSelector(state => state.Home_Facing)

    const SwitchController = (type) => {
        switch (type) {
            case 'Homes':
                return [
                    { general_information: { ...home_general_info_inputs, flooring: Home_Flooring.value, backup: Home_Backup.value } },
                    { main_features: home_main_features },
                    { business_and_communication: home_business_and_communication },
                    { utilities: utilities },
                    { facing: facing },
                ]
            case 'Plots':
                return [
                    { main_features: plot_main_features },
                    { utilities: utilities },
                    { facing: facing },
                ]
            case 'Commercial':
                return [
                    { general_information: { ...commercial_general_info_inputs, flooring: commercial_flooring.value, backup: commercial_backup.value } },
                    { main_features: commercial_main_features },
                    { business_and_communication: commercial_business_and_communication },
                    { utilities: utilities },
                    { facing: facing },
                ]
            default:
                break;
        }
    }

    const CheckEmptyFields = (formData) => {
        if (property_purpose_type.purpose === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'purpose_required', value: true } })
        }
        if (property_purpose_type.wantedType === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'wantedType_required', value: true } })
        }
        if (property_purpose_type.propertyType === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'propertyType_required', value: true } })
        }
        if (sub_property_type.value === undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_category_required', value: true } })
        }
        if (city.value === undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'city_name_required', value: true } })
        }
        if (location.value === undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'location_name_required', value: true } })
            console.log('location')
        }
        if (property_title === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_title_required', value: true } })
        }
        if (property_description === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_description_required', value: true } })
        }
        if (price === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'price_required', value: true } })
        }
        if (land_area === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'land_area_required', value: true } })
        }
        else {
            console.log('form submitted')
            console.log('submitted data', formData)
            axios.post('http://localhost:3200/addproperty/uploaddata', formData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('secretkey')}`
                    }
                }).then(res => console.log(res)).catch(err => console.log(err))
        }
    }

    // HANDLE SUBMIT PROPERTY

    const HandleSubmitProperty = (e) => {
        e.preventDefault()
        const selected_features = SwitchController(property_purpose_type.propertyType)
        const formData = {
            purpose: property_purpose_type.purpose,
            wanted_for: property_purpose_type.wantedType,
            property_type: property_purpose_type.propertyType,
            property_category: sub_property_type.value,
            city_name: city.value,
            location_name: location.value,
            property_title,
            property_description,
            price,
            land_area,
            area_unit_name,
            images,
            features: selected_features
        }
        // this function will check empty fields and if all required fields are filled properly it will send data to the server
        CheckEmptyFields(formData)

    }


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
            <Container maxWidth="md" className={`${classes.mainContainer}`}>
                <h5><span className='asterik-para'>*</span> Are Required Fields</h5>
            </Container>
            {/* ADD PROPERTY FORM */}
            <Container maxWidth="md" className={classes.mainContainer}>
                <form onSubmit={HandleSubmitProperty}>
                    <PropertyTypeAndLocation />
                    <PropertyDetails />
                    <AddImages />
                    {
                        (() => {
                            switch (property_purpose_type.propertyType) {
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
                </form>
            </Container>

            {/* GOTO TOP BUTTON */}
            <GoToTop />
        </Layout>);
}
export default React.memo(AddProperty);