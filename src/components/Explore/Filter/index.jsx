import { makeStyles } from '@material-ui/core/styles';

// STYLES
const useStyles = makeStyles((theme) => ({
    MainContainer: {
        backgroundColor: "grey",
    }
}));
const Filter = (props) => {
    // LOGIC
    const classes = useStyles();

    // USER INTERFACE
    return (
        <>
            <div className={classes.MainContainer}>
                <p>this is filter component</p>
            </div>
        </>
    );
}

export default Filter;