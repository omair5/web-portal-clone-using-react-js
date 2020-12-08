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
    tabPanels: {
        backgroundColor: 'red',


    },
    MainContainer: {
        border: '2px solid rgb(230, 230, 230)',
        backgroundColor: 'red',
        height: '700px',
        overflowY: 'scroll'

    },
    appBar: {
        backgroundColor: 'rgb(222, 222, 222)',
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
            {/* TAB BUTTONS */}
            <div className={classes.MainContainer}>
                <AppBar position="static" className={classes.appBar}>
                    <Tabs TabIndicatorProps={{ style: { height: '5px', backgroundColor: 'rgb(252, 184, 22)' } }} value={value} onChange={handleChange} aria-label="simple tabs example" centered >
                        <Tab label="BUY" {...a11yProps(0)} className={classes.tabButtons} style={{ color: value === 0 ? "rgb(252, 184, 22)" : "" }} />
                        <Tab label="RENT" {...a11yProps(1)} className={classes.tabButtons} style={{ color: value === 1 ? "rgb(252, 184, 22)" : "" }} />
                        <Tab label="WANTED" {...a11yProps(2)} className={classes.tabButtons} style={{ color: value === 2 ? "rgb(252, 184, 22)" : "" }} />
                        <Tab label="PROJECT" {...a11yProps(3)} className={classes.tabButtons} style={{ color: value === 3 ? "rgb(252, 184, 22)" : "" }} />
                    </Tabs>
                </AppBar>

                {/* TABS */}
                <TabPanel value={value} index={0} className={classes.tabPanels}>
                    <BuyTab />
                </TabPanel>

                <TabPanel value={value} index={1} className={classes.tabPanels}>
                    <RentTab />
                </TabPanel>

                <TabPanel value={value} index={2} className={classes.tabPanels}>
                    <WantedTab />
                </TabPanel>

                <TabPanel value={value} index={3} className={classes.tabPanels}>
                    <ProjectTab />
                </TabPanel>
            </div>

        </>
    );
}
export default React.memo(SimpleTabs);