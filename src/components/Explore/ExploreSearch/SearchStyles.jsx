import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({

    childContainer: {
        margin: '30px 0px',
    },
    paraStyle: {
        fontWeight: 'bold',
        fontSize: '12px',
        color: '#fcb812',
        paddingLeft: '3px',
    },
    searchButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(252, 184, 22)',
        color: 'white',
        borderRadius: '5px',
        padding: '1.5rem',
        marginTop: '0.5rem',
        cursor: 'pointer',
        transition: '0.3s',
        margin: '0px auto',
        width: '90%',
        "&:hover": {
            color: 'white',
            backgroundColor: 'rgb(59, 70, 86)',
        }
    },
    search: {
        fontSize: '16px',
        fontWeight: 'bolder',
    }
}));

export default UseStyles;
