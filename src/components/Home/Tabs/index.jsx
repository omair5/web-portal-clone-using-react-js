import React from 'react';
import Buy from './Buy';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './tabs.module.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component='span'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '75%',
    },
    tabButtons: {
        margin: '0px 2rem',
        marginTop: '2rem',
        border: '2px solid white',
        borderRadius: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',

    },
    tabPanels: {
        backgroundColor: 'white',
        color: 'black',
        height: 'auto',
        marginTop: '2.4rem',
        borderRadius: '5px'

    }
}));


const SimpleTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* INTRODUCTORY TEXT */}
            <div className={styles.bg_img}>
                <div className={styles.overlay}>
                    <div>
                        <h1>Abaadee.com is a Real Estate Pakistan Property Portal</h1>
                        <h2 className='yellow text-center'>Explore Properties In Pakistan</h2>
                    </div>
                    {/* TAB BUTTONS */}
                    <div className={classes.root}>
                        <AppBar position="static" color={'transparent'}>
                            <Tabs TabIndicatorProps={{ style: { height: '5px', backgroundColor: 'rgb(252, 184, 22)', borderRadious: '5px' } }} value={value} onChange={handleChange} aria-label="simple tabs example" style={{ margin: 'auto' }} >
                                <Tab label="BUY" {...a11yProps(0)} className={classes.tabButtons} style={{ backgroundColor: value === 0 ? "white" : "", color: value === 0 ? "rgb(252, 184, 22)" : "" }} />
                                <Tab label="RENT" {...a11yProps(1)} className={classes.tabButtons} style={{ backgroundColor: value === 1 ? "white" : "", color: value === 1 ? "rgb(252, 184, 22)" : "" }} />
                                <Tab label="WANTED" {...a11yProps(2)} className={classes.tabButtons} style={{ backgroundColor: value === 2 ? "white" : "", color: value === 2 ? "rgb(252, 184, 22)" : "" }} />
                                <Tab label="PROJECT" {...a11yProps(3)} className={classes.tabButtons} style={{ backgroundColor: value === 3 ? "white" : "", color: value === 3 ? "rgb(252, 184, 22)" : "" }} />
                            </Tabs>
                        </AppBar>
                        {/* TABS */}
                        <TabPanel value={value} index={0} className={classes.tabPanels}>
                            <Buy />
                        </TabPanel>

                        <TabPanel value={value} index={1} className={classes.tabPanels}>
                            <Buy />
                        </TabPanel>

                        <TabPanel value={value} index={2} className={classes.tabPanels}>
                            <Buy />
                        </TabPanel>

                        <TabPanel value={value} index={3} className={classes.tabPanels}>
                            <Buy />
                        </TabPanel>
                    </div>
                </div>
            </div>

        </>
    );
}

export default React.memo(SimpleTabs);