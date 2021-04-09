import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        maxWidth: '100%',
        margin: 'auto',
        marginTop: '30px',
    },
    ResultCount: {
        textAlign: 'center',
        padding: '10px 0px',
        paddingBottom: '20px',
        "& span": {
            fontSize: '20px',
            fontWeight: 'bolder',
            color: 'rgb(76, 84, 85)'
        }
    },
    progressBarContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export const useStylesBase = makeStyles(theme => ({
    root: {
        "& .MuiPaginationItem-sizeLarge": {
            fontSize: '20px',
            [theme.breakpoints.down('md')]: {
                fontSize: '12px',
            },
        },
        '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#fcb812',
            color: 'black',
        },
        '& .MuiButtonBase-root': {
            "&:hover": {
                backgroundColor: '#fcb812',
            }
        },
        "& .MuiPagination-ul": {
            justifyContent: "center"
        },
    },
}));