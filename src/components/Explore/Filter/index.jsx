import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import ExploreSearchBuy from '../ExploreSearch/ExploreSearchBuy'
import ExploreSearchRent from '../ExploreSearch/ExploreSearchRent'
import ExploreSearchWanted from '../ExploreSearch/ExploreSearchWanted'
import ExploreSearchProject from '../ExploreSearch/ExploreSearchProject'
// import ExploreCategories from '../Categories';
import { useSelector } from 'react-redux'

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

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

const useStyles = makeStyles((theme) => ({
    tabButtons: {
        fontSize: '1.3rem',
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
        height: '600px',
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    appBar: {
        backgroundColor: 'rgb(222, 222, 222)',
        zIndex: 1,
        fontSize: '20px',
        padding: '11px 0px',
        fontWeight: 'bolder',
        letterSpacing: '1.1px',
        textAlign: 'center',
        color: 'rgb(59, 70, 86)'
    }
}));


const SimpleTabs = () => {
    const classes = useStyles();
    // const [value, setValue] = React.useState(0);
    const changeExploreTab = useSelector(state => state.Explore_Change_tab)

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <>
            {/* TAB BUTTONS */}
            {/* this custom-scroll class is used from app.css */}
            <div className={`${classes.MainContainer} custom-scroll`}>
                <AppBar position="sticky" className={classes.appBar}>
                    {/* <Tabs TabIndicatorProps={{ style: { height: '5px', backgroundColor: 'rgb(252, 184, 22)' } }} value={value} onChange={handleChange} aria-label="simple tabs example" centered >
                        <Tab label="FILTERS" {...a11yProps(0)} className={classes.tabButtons} style={{ color: value === 0 ? "rgb(252, 184, 22)" : "" }} /> */}
                    {/* <Tab label="CATEGORIES" {...a11yProps(1)} className={classes.tabButtons} style={{ color: value === 1 ? "rgb(252, 184, 22)" : "" }} /> */}
                    {/* </Tabs> */}
                    FILTERS
                </AppBar>

                {/* TABS */}
                {/* <TabPanel value={value} index={0} className={classes.tabPanels}>
                    {
                        (() => {
                            switch (changeExploreTab) {
                                case 'buy':
                                    return <ExploreSearchBuy />
                                case 'rent':
                                    return <ExploreSearchRent />
                                case 'wanted':
                                    return <ExploreSearchWanted />
                                case 'project':
                                    return <ExploreSearchProject />
                                default:
                                    return <ExploreSearchBuy />
                            }
                        })()
                    }
                </TabPanel> */}

                <TabPanel >
                    {
                        (() => {
                            switch (changeExploreTab) {
                                case 'buy':
                                    return <ExploreSearchBuy />
                                case 'rent':
                                    return <ExploreSearchRent />
                                case 'wanted':
                                    return <ExploreSearchWanted />
                                case 'project':
                                    return <ExploreSearchProject />
                                default:
                                    return <ExploreSearchBuy />
                            }
                        })()
                    }
                </TabPanel>

                {/* <TabPanel value={value} index={1} className={classes.tabPanels}>
                    <ExploreCategories />
                </TabPanel> */}
            </div>

        </>
    );
}
export default React.memo(SimpleTabs);