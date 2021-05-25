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
import { useSelector, useDispatch } from 'react-redux';
import HouseIcon from '@material-ui/icons/House';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import PopUpMessage from '../../components/FrequentlyUsed/PopUpMessage';
import FailurePopUpMessage from '../../components/FrequentlyUsed/FailurePopUpMessage';

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
    },
    error: {
        textAlign: 'center',
        fontSize: '20px'
    }
}));

const AddProperty = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    let formdata = new FormData()
    const [error, setError] = useState(false)
    const [loader, setloader] = useState(false)
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
    // general
    const utilities = useSelector(state => state.Home_utilities)
    const facing = useSelector(state => state.Home_Facing)
    const position = useSelector(state => state.Google_Maps_Latitude_Longitude)

    // flags for required fields
    let check_required_field_status = {
        purpose_required_flag: true,
        wantedType_required_flag: true,
        propertyType_required_flag: true,
        property_category_required_flag: true,
        city_name_required_flag: true,
        location_name_required_flag: true,
        property_title_required_flag: true,
        property_description_required_flag: true,
        price_required_flag: true,
        land_area_required_flag: true,
        min_3_images_required_flag: true,
        home_bedrooms_required_flag: true,
        home_bathrooms_required_flag: true,
        commercial_rooms_required_flag: true
    }

    const SwitchController = (type) => {
        switch (type) {
            case 'Homes':
                return {
                    general_information: { ...home_general_info_inputs, flooring: Home_Flooring.value, backup: Home_Backup.value },
                    main_features: home_main_features,
                    business_and_communication: home_business_and_communication,
                    utilities: utilities,
                    facing: facing,
                }
            case 'Plots':
                return {
                    main_features: plot_main_features,
                    utilities: utilities,
                    facing: facing,
                }
            case 'Commercial':
                return {
                    general_information: { ...commercial_general_info_inputs, flooring: commercial_flooring.value, backup: commercial_backup.value },
                    main_features: commercial_main_features,
                    business_and_communication: commercial_business_and_communication,
                    utilities: utilities,
                    facing: facing,
                }
            default:
                break;
        }
    }

    const CheckEmptyFields = (Add_Property_Form_Data, images) => {
        if (property_purpose_type.purpose === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'purpose_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'purpose_required', value: false } })
            check_required_field_status.purpose_required_flag = false
        }

        if (property_purpose_type.purpose === 'Wanted') {
            if (property_purpose_type.wantedType) {
                dispatch({ type: "set_required_field_error", payload: { name: 'wantedType_required', value: false } })
                check_required_field_status.wantedType_required_flag = false
            }
            else {
                dispatch({ type: "set_required_field_error", payload: { name: 'wantedType_required', value: true } })
            }
        }
        else {
            check_required_field_status.wantedType_required_flag = false
        }

        if (property_purpose_type.propertyType === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'propertyType_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'propertyType_required', value: false } })
            check_required_field_status.propertyType_required_flag = false
        }

        if (sub_property_type.value === undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_category_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_category_required', value: false } })
            check_required_field_status.property_category_required_flag = false
        }

        if (city.value === undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'city_name_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'city_name_required', value: false } })
            check_required_field_status.city_name_required_flag = false
        }
        if (location.value === undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'location_name_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'location_name_required', value: false } })
            check_required_field_status.location_name_required_flag = false
        }

        if (property_title === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_title_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_title_required', value: false } })
            check_required_field_status.property_title_required_flag = false
        }

        if (property_description === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_description_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'property_description_required', value: false } })
            check_required_field_status.property_description_required_flag = false
        }

        if (price === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'price_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'price_required', value: false } })
            check_required_field_status.price_required_flag = false
        }

        if (land_area === '' || undefined) {
            dispatch({ type: "set_required_field_error", payload: { name: 'land_area_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'land_area_required', value: false } })
            check_required_field_status.land_area_required_flag = false
        }

        if (images.length < 3) {
            dispatch({ type: "set_required_field_error", payload: { name: 'min_3_images_required', value: true } })
        }
        else {
            dispatch({ type: "set_required_field_error", payload: { name: 'min_3_images_required', value: false } })
            check_required_field_status.min_3_images_required_flag = false
        }

        if (property_purpose_type.propertyType === 'Homes') {
            if (home_general_info_inputs.bedrooms === '') {
                dispatch({ type: "set_required_field_error", payload: { name: 'home_bedrooms_required', value: true } })
            }
            else {
                dispatch({ type: "set_required_field_error", payload: { name: 'home_bedrooms_required', value: false } })
                check_required_field_status.home_bedrooms_required_flag = false
            }

            if (home_general_info_inputs.bathrooms === '') {
                dispatch({ type: "set_required_field_error", payload: { name: 'home_bathrooms_required', value: true } })
            }
            else {
                dispatch({ type: "set_required_field_error", payload: { name: 'home_bathrooms_required', value: false } })
                check_required_field_status.home_bathrooms_required_flag = false
            }
        }
        else {
            check_required_field_status.home_bedrooms_required_flag = false
            check_required_field_status.home_bathrooms_required_flag = false
        }

        if (property_purpose_type.propertyType === 'Commercial') {
            if (commercial_general_info_inputs.rooms === '') {
                dispatch({ type: "set_required_field_error", payload: { name: 'commercial_rooms_required', value: true } })
            }
            else {
                dispatch({ type: "set_required_field_error", payload: { name: 'commercial_rooms_required', value: false } })
                check_required_field_status.commercial_rooms_required_flag = false
            }
        }
        else {
            check_required_field_status.commercial_rooms_required_flag = false
        }
    }

    const ClearFormFields = () => {
        // CLEAR PROPERTY TYPE AND LOCATION
        dispatch({ type: 'clear_property_details' })
        dispatch({ type: 'clear_property_sub_type' })
        dispatch({ type: 'add_property_clear_selected_city' })
        dispatch({ type: 'add_property_clear_selected_location' })
        // PROPERTY DETAILS
        dispatch({ type: 'clear_property_details_title' })
        dispatch({ type: 'clear_property_details_description' })
        dispatch({ type: 'clear_property_details_price' })
        dispatch({ type: 'clear_property_details_land_area' })
        dispatch({ type: 'clear_property_details_area_unit' })
        // IMAGES 
        dispatch({ type: 'clear_gallery_images_list' })
        // HOME FEATURES
        dispatch({ type: 'clear_home_general_info_inputs' })
        dispatch({ type: 'clear_home_flooring' })
        dispatch({ type: 'clear_home_backup' })
        dispatch({ type: 'clear_home_main_features' })
        dispatch({ type: 'clear_home_business_and_communication' })
        dispatch({ type: 'clear_Home_utilities' })
        dispatch({ type: 'clear_home_facing' })
        // PLOT FEATURES
        dispatch({ type: 'clear_plot_main_features' })
        // COMMERCIAL FEATURES
        dispatch({ type: 'clear_commercial_general_info_inputs' })
        dispatch({ type: 'clear_commercial_main_features' })
        dispatch({ type: 'clear_commercial_flooring' })
        dispatch({ type: 'clear_commercial_backup' })
        dispatch({ type: 'clear_commercial_business_and_communication' })
        setError(false)
        dispatch({ type: 'clear_property_details_editor_state' })
        // CLEAR MAP LATITUDE AND LONGITUDE
        dispatch({ type: 'clear_Google_Maps_Latitude_Longitude' })
    }

    // HANDLE SUBMIT PROPERTY
    const HandleSubmitProperty = (e) => {
        e.preventDefault()
        const selected_features = SwitchController(property_purpose_type.propertyType)
        const Add_Property_Form_Data = {
            purpose: property_purpose_type.purpose,
            wanted_for: property_purpose_type.wantedType,
            property_type: property_purpose_type.propertyType,
            property_category: sub_property_type.value,
            city_name: city.value,
            location_name: location.value,
            latitude: position.lat,
            longitude: position.lng,
            property_title,
            property_description,
            price,
            land_area,
            area_unit_name,
            features: selected_features,
        }

        for (var data of Object.entries(Add_Property_Form_Data)) {
            if (data[0] === 'features') {
                formdata.append(data[0], JSON.stringify(data[1]))
            }
            else {
                formdata.append(data[0], data[1])
            }
        }

        for (var x in images) {
            formdata.append('image', images[x].file)
        }

        // this function will check empty fields which are required
        CheckEmptyFields(Add_Property_Form_Data, images)

        if (Object.values(check_required_field_status).every(value => value === false)) {
            setloader(true)

            axios.post('http://localhost:3200/addproperty/uploaddata', formdata,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('secretkey')}`,
                        'content-type': 'multipart/form-data'
                    }
                }).then(res => {
                    console.log('this is response', res)
                    if (res.data.status === 200) {
                        dispatch({ type: 'open_FrequentlyUsed_PopUpMessage' })
                    }
                    else {
                        dispatch({ type: 'open_FrequentlyUsed_Failure_PopUpMessage' })
                    }
                    // CLEARING FORM FIELDS
                    ClearFormFields()
                    setloader(false)
                }).catch(err => console.log(err))
        }
        else {
            setError(true)
        }
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
                <button className={classes.buttonContainer} onClick={HandleSubmitProperty}>
                    {loader ? <CircularProgress style={{ width: '13px', height: '13px' }} /> : 'SUBMIT PROPERTY'}
                </button>
                <div className={classes.error}>
                    {error && <span className='required'>All * Required Fields Should Be Filled Properly!</span>}
                </div>
            </Container>
            {/* SUCCESS MESSAGE */}
            < PopUpMessage
                heading={'ThankYou For Your Trust On Abaadee.com!'}
                color={'green'}
                message={'Dear User, Team Abaadee Will Review Your Property For Approval And Will Get back To You With In 24 Hours'}
            />
            {/* FAILURE MESSAGE */}
            <FailurePopUpMessage
                heading={'OOPS! SORRY SOMETHING WENT WRONG'}
                color={'red'}
                message={'Dear User, We Apoligize For The inconvenience! Servers Are Not Responding At This Moment Please Try Later'}
            />
            {/* GOTO TOP BUTTON */}
            <GoToTop />
        </Layout>);
}
export default React.memo(AddProperty);