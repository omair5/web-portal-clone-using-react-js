import { makeStyles } from '@material-ui/core/styles';

export const UseStyles = makeStyles((theme) => ({
    radio: {
        "& svg": {
            fontSize: '23px'
        },
        '&$checked': {
            color: '#fcb812'
        }
    },
    checked: {},
    RadioLabel: {
        fontSize: '17px',
        "& svg": {
            fontSize: '20px'
        }
    },
    mainHeading: {
        backgroundColor: '#fcb812',
        color: 'black',
        padding: '10px',
        margin: '30px 0px'
    },
    mainContainer: {
        margin: '10px auto'
    },
    horizontalRow: {
        margin: '15px 0px',
        "& p": {
            color: 'rgb(76, 84, 85)',
            fontWeight: 'bolder',
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    },
    cityAndLocation: {
        margin: '15px 0px',
        "& p": {
            color: 'rgb(76, 84, 85)',
            fontWeight: 'bolder',
            fontSize: '18px',
            textTransform: 'uppercase',
            paddingBottom: '10px',
            letterSpacing: '1px'
        }
    }
}));