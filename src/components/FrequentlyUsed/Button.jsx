import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    myButton: {
        backgroundColor: '#fcb812',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        padding: '10px',
        paddingTop: '15px',
        marginTop: '20px',
        fontWeight: 'bolder',
        fontSize: '15px',
        cursor: 'pointer',
        '&:hover': {
            color: 'white'
        }
    },
}));
const AbaadeeButton = (props) => {
    const classes = useStyles();
    const { innerContent, buttonIcon } = props
    return (
        <div className={classes.myButton}>
            {buttonIcon !== '' && <div>{buttonIcon}</div>}
            <div >{innerContent}</div>
        </div>
    );
}

export default React.memo(AbaadeeButton);