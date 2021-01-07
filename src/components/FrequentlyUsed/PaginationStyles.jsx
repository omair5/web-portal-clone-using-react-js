import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        maxWidth: '100%',
        margin: 'auto',
        marginTop: '30px',
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