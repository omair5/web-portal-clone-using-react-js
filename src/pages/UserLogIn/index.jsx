import React from 'react';
import Layout from '../../components/Layout/Layout';
import InfoCardLayout from '../../components/UserLogin/InfoCardLayout';
import ViewsAndVisitLayout from '../../components/UserLogin/ViewsAndVisitsLayout';
import TopLayout from '../../components/UserLogin/TopLayout'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mainHeading: {
        textAlign: 'center',
        padding: '15px 0px'
    }
});

const UserLogIn = () => {
    const classes = useStyles();
    return (
        <>
            <Layout FooterDisplay={true}>
                <h1 className={classes.mainHeading}>Welcome To Abaadee.com!</h1>
                <InfoCardLayout />
                <ViewsAndVisitLayout />
                <TopLayout />
            </Layout>
        </>
    );
}

export default React.memo(UserLogIn);