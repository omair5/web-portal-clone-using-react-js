import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    ChartBarIcon: {
        fontSize: '30px',
        color: 'silver'
    },
    HourlyViewsContainerChild: {
        "& h3,p": {
            padding: '5px'
        }
    }
});

const Views = ({ totalViews, timePeriod }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.HourlyViewsContainerChild}>
                <FontAwesomeIcon icon={faChartBar} className={classes.ChartBarIcon} />
                <p style={{ fontWeight: 'bolder' }}>{totalViews}</p>
                <p>{timePeriod}</p>
            </div>
        </>
    );
}

export default React.memo(Views);