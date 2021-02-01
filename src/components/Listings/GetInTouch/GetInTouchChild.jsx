import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    childContainer: {
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '150px',
        cursor: "pointer"
    }
});

const GetInTouchChild = ({ description, children }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.childContainer}>
                {children}
                <p>{description}</p>
            </div>
        </>
    );
}

export default React.memo(GetInTouchChild);