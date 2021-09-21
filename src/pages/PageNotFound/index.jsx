import React from 'react';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import SadFace from './notfound.svg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100vw',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        "& h1": {
            fontSize: '80px',
            color: 'rgb(76, 84, 85)',
            padding: '5px 0px'
        },
        "& h3": {
            fontSize: '50px',
            color: 'rgb(76, 84, 85)',
            padding: '5px 0px'
        },
        "& p": {
            color: 'gray',
            padding: '5px 0px'
        }
    },
    BackToHomepage: {
        color: 'rgb(76, 84, 85)',
        letterSpacing: '1px',
        borderBottom: '2px solid #fcb812',
        cursor: 'ponter',
        textDecoration: 'none'
    },
    marginTop: {
        marginTop: '20px'
    }
}));

const PageNotFound = () => {
    const classes = useStyles();
    return (
        <Layout FooterDisplay={true}>
            <div className={classes.mainContainer}>
                <Link to='/' className={classes.BackToHomepage} ><h4 >BACK TO HAMEPAGE</h4> </Link>

                <img src={SadFace} alt="sad face" height={'150px'} width={'150px'} className={classes.marginTop} />
                {/* <h1>404</h1> */}
                <h3>Page Not Found!</h3>
                <p>The Page You Are Looking For Doesn't Exist Or An Other Error Occured</p>
            </div>
        </Layout>);
}
export default PageNotFound;