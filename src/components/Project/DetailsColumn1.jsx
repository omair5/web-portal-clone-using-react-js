import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        textTransform: 'capitalize'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: '100%',
        overflowX: 'hidden'
    },
    tableHeading: {
        fontWeight: 'bolder'
    },
    tableValue: {
        textTransform: 'capitalize'
    }
});

const DetailsColumn1 = ({ locality, city, total_area, project_type }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading} >Locality </StyledTableCell>
                        <StyledTableCell align="left" className={classes.tableValue}>{locality}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>City </StyledTableCell>
                        <StyledTableCell align="left" className={classes.tableValue}>{city}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Total Area </StyledTableCell>
                        <StyledTableCell align="left" className={classes.tableValue}>{(!!total_area) ? total_area : '-'}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>project type </StyledTableCell>
                        <StyledTableCell align="left" className={classes.tableValue}>{(!!project_type) ? project_type : '-'}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}
export default React.memo(DetailsColumn1)