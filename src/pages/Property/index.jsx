import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     mainHeading: {
//         textAlign: 'center',
//         padding: '15px 0px'
//     }
// });

const Property = () => {
    // const classes = useStyles();
    const { propertyId } = useParams()
    console.log(propertyId)
    return (
        <>
            <Layout FooterDisplay={true}>
                <h1 >Welcome To Abaadee.com!</h1>
                <h1>this is property {propertyId} </h1>
            </Layout>
        </>
    );
}

export default React.memo(Property);