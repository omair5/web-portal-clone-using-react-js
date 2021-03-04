import Layout from '../../components/Layout/Layout';
import GoToTop from '../../GoToTop';
import Container from '@material-ui/core/Container';
import PropertyTypeAndLocation from '../../components/AddProperty/PropertyTypeAndLocation';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px auto'
    }
}));


// var converter = require('number-to-words');
// const check = converter.toWords(13000); // => “thirteen”
const AddProperty = () => {
    const classes = useStyles();
    return (
        <Layout FooterDisplay={true}>

            <Container maxWidth="md" className={classes.mainContainer}>
                <PropertyTypeAndLocation />
            </Container>

            <GoToTop />
        </Layout>);
}
export default AddProperty;