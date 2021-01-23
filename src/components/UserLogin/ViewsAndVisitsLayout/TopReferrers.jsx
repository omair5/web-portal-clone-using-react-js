import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import TopReferrersList from './TopReferrersList';

const useStyles = makeStyles({
    MainContainer: {
        height: "100%",
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0px',
    },
    child1: {
        flexBasis: '50%',
        display: 'flex',
        "& h5": {
            display: 'flex',
            alignItems: 'center'
        }
    },
    AttachmentIcon: {
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#fcb812',
        height: '30px',
        minWidth: '35px',
        textAlign: 'center',
        borderRadius: "50%",
        margin: '0px 10px',
        background: 'purple'
    },
    child2: {
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    ArrowDropDownCircleIcon: {
        fontSize: '20px',
        color: '#fcb812',
        height: '30px',
        minWidth: '35px',
        textAlign: 'center',
        borderRadius: "50%",
        marginRight: '10px',
        cursor: 'pointer'
    }
});

const TopReferrers = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false)

    const HandleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <div style={{ overflow: 'hidden' }}>
                <div className={classes.MainContainer}>
                    <div className={classes.child1}>
                        <AttachmentIcon className={classes.AttachmentIcon} />
                        <h5>Top Referrers</h5>
                    </div>
                    <div className={classes.child2}>
                        <ArrowDropDownCircleIcon className={classes.ArrowDropDownCircleIcon} onClick={HandleClick} />
                    </div>
                </div>

                {< TopReferrersList showState={show} />}

            </div>

        </>
    );
}

export default React.memo(TopReferrers);