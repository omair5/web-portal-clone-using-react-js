import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AgentCards from '../AgentCards';


const useStyles = makeStyles((theme) => ({
    MainContainer: {
        backgroundColor: 'rgb(245, 245, 245)',
        border: '2px solid rgb(230, 230, 230)',
        height: '600px',
        overflowY: 'scroll',
        overflowX: 'hidden',

    },
    ResultCount: {
        textAlign: 'center',
        marginTop: '10px',
        "& span": {
            fontSize: '20px',
            fontWeight: 'bolder'
        }
    },
    ForTopMargin: {
        marginTop: '20px'
    }
}));

const AgentListings = () => {
    const classes = useStyles();
    return (
        <>
            {/* this custom-scroll class is used from app.css */}
            <div className={`${classes.MainContainer} custom-scroll`}>
                <div className={classes.ResultCount}>
                    <span>1 RESULT</span>
                </div>
                {/* CARDS */}
                <div className={classes.ForTopMargin}>
                    <AgentCards />
                </div>
            </div>

        </>
    );
}
export default React.memo(AgentListings);