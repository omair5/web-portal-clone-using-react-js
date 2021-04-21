import { makeStyles } from '@material-ui/core/styles';

export const UseStyles = makeStyles((theme) => ({
    radio: {
        "& svg": {
            fontSize: '23px'
        },
        '&$checked': {
            color: 'rgb(59, 70, 86)'
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
        backgroundColor: 'rgb(76, 84, 85)',
        color: 'white',
        padding: '10px',
        margin: '30px 0px'
    },
    mainContainer: {
        margin: '10px auto'
    },
    horizontalRow: {
        margin: '15px 0px',
        "& p": {
            color: '#fcb812',
            fontWeight: 'bolder',
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    },
    cityAndLocation: {
        margin: '15px 0px',
        "& p": {
            color: '#fcb812',
            fontWeight: 'bolder',
            fontSize: '15px',
            textTransform: 'uppercase',
            paddingBottom: '10px',
            letterSpacing: '1px'
        }
    }
}));