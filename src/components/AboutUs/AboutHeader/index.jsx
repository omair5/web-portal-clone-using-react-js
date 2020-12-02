import { makeStyles } from "@material-ui/core/styles";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
// STYLES
const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: 'rgb(59, 70, 86)',
        width: '100%',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            '& h1,h3': {
                fontSize: '15px'
            }
        }

    },
    logo: {
        flexBasis: '50%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bolder'
    },
    GetInTouch: {
        display: 'flex',
        alignItems: 'center',
        flexBasis: '50%'
    },
    icon: {
        marginRight: '10px',
        fontSize: '25px',
        color: '#fcb812'
    },
    number: {
        color: 'white'
    },
    hide: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}));


const AboutHeader = () => {
    // LOGIC
    const classes = useStyles();

    // USER INTERFACE 
    return (
        <>
            <div className={classes.header}>
                <h1 className={classes.logo}>Abaadee.com</h1>
                <div className={classes.GetInTouch}>
                    <ContactPhoneIcon className={classes.icon} />
                    <h3 className={classes.number}><span className={classes.hide}>GET IN TOUCH:</span> (03)-111-222-298</h3>
                </div>
            </div>
        </>
    );
}

export default AboutHeader;