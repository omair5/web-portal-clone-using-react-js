import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GetInTouch from '../GetInTouch';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';

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
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    MainContainer: {
        backgroundColor: 'white'
    },
    TabContainer: {
        width: '100%',
        margin: 'auto',
    },
    Tab: {
        width: '100%',
        color: 'black',
        fontSize: '15px',
        fontWeight: 'bold'
    }
}));

function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.MainContainer}>
                <Tabs TabIndicatorProps={{ style: { height: '3px', backgroundColor: '#fcb812' } }} value={value} onChange={handleChange} aria-label="simple tabs example" centered className={classes.TabContainer}>
                    <Tab label="Profile" {...a11yProps(0)} className={classes.Tab} />
                    <Tab label="Leave a Review" {...a11yProps(1)} className={classes.Tab} />
                </Tabs>
            </AppBar>

            <GetInTouch />

            <TabPanel value={value} index={0} >
                <Tab1 />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Tab2 />
            </TabPanel>
        </div>
    );
}
export default React.memo(SimpleTabs)