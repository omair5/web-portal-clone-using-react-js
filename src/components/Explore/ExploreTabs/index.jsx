import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import BuyTab from '../BuyTab';
import RentTab from '../RentTab'
import WantedTab from '../Wanted';
import ProjectTab from '../Project';
import { useDispatch, useSelector } from 'react-redux'



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
        margin: '0px 1.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
            minWidth: "10%",
            margin: '0px 3px',
            paddingTop: '2px'
        }
    },
    MainContainer: {
        border: '2px solid rgb(230, 230, 230)',
        borderRight: 'none',
        borderTop: 'none',
        height: '600px',
        overflowY: 'scroll',

    },
    appBar: {
        backgroundColor: 'rgb(222, 222, 222)',
        zIndex: 1
    },
    ResultCount: {
        textAlign: 'center',
        marginTop: '10px',
        "& span": {
            fontSize: '20px',
            fontWeight: 'bolder'
        }
    },

}));

const SimpleTabs = () => {
    const classes = useStyles();
    const current_tab = useSelector((state) => state.Explore_Listings_Tabs)
    const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                dispatch({ type: 'set_current_tab_to_buy' })
                break;
            case 1:
                dispatch({ type: 'set_current_tab_to_rent' })
                break;
            case 2:
                dispatch({ type: 'set_current_tab_to_wanted' })
                break;
            case 3:
                dispatch({ type: 'set_current_tab_to_project' })
                break;
            default:
                break;
        }
        console.log(newValue)
        // to change the search bar component in the left side bar of listing
        dispatch({ type: newValue.toString() })
    };

    return (
        <>
            {/* TAB BUTTONS */}
            {/* this custom-scroll class is used from app.css */}
            <div className={`${classes.MainContainer} custom-scroll`}>
                <AppBar position="sticky" className={classes.appBar}>
                    <Tabs TabIndicatorProps={{ style: { height: '5px', backgroundColor: 'rgb(252, 184, 22)' } }} value={current_tab} onChange={handleChange} aria-label="simple tabs example" centered >
                        <Tab label="BUY" {...a11yProps(0)} className={classes.tabButtons} style={{ color: current_tab === 0 ? "rgb(252, 184, 22)" : "" }} />
                        <Tab label="RENT" {...a11yProps(1)} className={classes.tabButtons} style={{ color: current_tab === 1 ? "rgb(252, 184, 22)" : "" }} />
                        <Tab label="WANTED" {...a11yProps(2)} className={classes.tabButtons} style={{ color: current_tab === 2 ? "rgb(252, 184, 22)" : "" }} />
                        <Tab label="PROJECT" {...a11yProps(3)} className={classes.tabButtons} style={{ color: current_tab === 3 ? "rgb(252, 184, 22)" : "" }} />
                    </Tabs>
                </AppBar>

                {/* TABS */}
                <TabPanel value={current_tab} index={0} className={classes.tabPanels}>
                    <BuyTab />
                </TabPanel>

                <TabPanel value={current_tab} index={1} className={classes.tabPanels}>
                    <RentTab />
                </TabPanel>

                <TabPanel value={current_tab} index={2} className={classes.tabPanels}>
                    <WantedTab />
                </TabPanel>

                <TabPanel value={current_tab} index={3} className={classes.tabPanels}>
                    <ProjectTab />
                </TabPanel>
            </div>

        </>
    );
}
export default React.memo(SimpleTabs);