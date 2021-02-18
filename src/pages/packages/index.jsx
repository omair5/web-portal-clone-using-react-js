import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout/Layout';
import PackageLoginContainer from '../../components/Packages/PackageLoginContainer';

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Packages = () => {
    const classes = useStyles();
    return (
        <>
            <Layout FooterDisplay={true}>
                <div className={classes.MainContainer}>
                    <h1>Choose a Package</h1>
                    <PackageLoginContainer />
                </div>
            </Layout>
        </>
    );
}
export default React.memo(Packages);