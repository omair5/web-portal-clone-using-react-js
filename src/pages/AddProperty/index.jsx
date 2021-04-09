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

    }
}));
const AddProperty = () => {
    const classes = useStyles();
    return (
        <Layout FooterDisplay={true}>

            <Container maxWidth="md" className={classes.mainContainer}>
                <PropertyTypeAndLocation />
                <PropertyDetails />
                <AddImages />
                {/* <HomeFeatures /> */}
                {/* <PlotFeatures /> */}
                {/* <CommercialFeatures /> */}
                <button className={classes.buttonContainer}>SUBMIT PROPERTY</button>
            </Container>

            <GoToTop />
        </Layout>);
}
export default AddProperty;