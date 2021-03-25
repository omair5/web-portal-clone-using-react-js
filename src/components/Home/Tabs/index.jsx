import React, { useEffect } from 'react';
import Buy from './Buy';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './tabs.module.css';
import Rent from './Rent';
import Wanted from './Wanted';
import Projects from './Projects';
import HomeGetCities from '../../../Services/HomeGetCities'
import HomeGetLocations from '../../../Services/HomeGetLocations'
import { useDispatch } from 'react-redux';


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
    tabButtons: {
        margin: '0px 2rem',
        marginTop: '2rem',
        border: '2px solid white',
        borderRadius: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
            minWidth: "10%",
            margin: '0px 3px',
            marginTop: '2rem',
            paddingTop: '2px'
        }
    },
    tabPanels: {
        backgroundColor: 'white',
        color: 'black',
        height: 'auto',
        marginTop: '2.4rem',
        borderRadius: '5px'

    },
    wrapContainer: {
        width: '80%',
        [theme.breakpoints.only('xs')]: {
            width: '90%',
        }
    },
}));


const SimpleTabs = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // FETCHING CITY API
    useEffect(() => {
        async function GetCitiesHome() {
            const cities_options = []
            const cities = await HomeGetCities()
            cities.map(value => (
                cities_options.push({ label: value, value: value })
            ))
            dispatch({ type: 'populate_cities_in_select_list', payload: cities_options })
        }
        GetCitiesHome()
    }, [dispatch])

    return (
        <>
            {/* INTRODUCTORY TEXT */}
            <div className={styles.bg_img}>
                <div className={styles.overlay}>
                    <div className={classes.wrapContainer}>
                        <div className={styles.abaadeeText}>
                            <h1 className='text-center'>Abaadee.com is a Real Estate Pakistan Property Portal</h1>
                            <h2 className='yellow text-center'>Explore Properties In Pakistan</h2>
                        </div>
                        {/* TAB BUTTONS */}
                        <div className={classes.root}>

                            <Tabs TabIndicatorProps={{ style: { height: '5px', backgroundColor: 'rgb(252, 184, 22)' } }} value={value} onChange={handleChange} aria-label="simple tabs example" centered >
                                <Tab label="BUY" {...a11yProps(0)} className={classes.tabButtons} style={{ backgroundColor: value === 0 ? "white" : "", color: value === 0 ? "rgb(252, 184, 22)" : "" }} />
                                <Tab label="RENT" {...a11yProps(1)} className={classes.tabButtons} style={{ backgroundColor: value === 1 ? "white" : "", color: value === 1 ? "rgb(252, 184, 22)" : "" }} />
                                <Tab label="WANTED" {...a11yProps(2)} className={classes.tabButtons} style={{ backgroundColor: value === 2 ? "white" : "", color: value === 2 ? "rgb(252, 184, 22)" : "" }} />
                                <Tab label="PROJECT" {...a11yProps(3)} className={classes.tabButtons} style={{ backgroundColor: value === 3 ? "white" : "", color: value === 3 ? "rgb(252, 184, 22)" : "" }} />
                            </Tabs>
                            {/* TABS */}
                            <TabPanel value={value} index={0} className={classes.tabPanels}>
                                <Buy />
                            </TabPanel>

                            <TabPanel value={value} index={1} className={classes.tabPanels}>
                                <Rent />
                            </TabPanel>

                            <TabPanel value={value} index={2} className={classes.tabPanels}>
                                <Wanted />
                            </TabPanel>

                            <TabPanel value={value} index={3} className={classes.tabPanels}>
                                <Projects />
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default React.memo(SimpleTabs);