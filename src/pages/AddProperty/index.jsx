import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import Container from '@material-ui/core/Container';
import PropertyTypeAndLocation from '../../components/AddProperty/PropertyTypeAndLocation';
import { makeStyles } from '@material-ui/core/styles';
import PropertyDetails from '../../components/AddProperty/PropertyDetails';
import AddImages from '../../components/AddProperty/AddImages';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px auto'
    },
    buttonContainer: {
        backgroundColor: 'green',
        width: '20%',
        display: 'block',
        margin: '20px auto'
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
                <button className={classes.buttonContainer}>SUBMIT PROPERTY</button>
            </Container>

            <GoToTop />
        </Layout>);
}
export default AddProperty;