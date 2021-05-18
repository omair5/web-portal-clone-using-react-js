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
    }
});

const DetailsColumn2 = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading} >Bath(s) </StyledTableCell>
                        <StyledTableCell align="left">3</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Purpose </StyledTableCell>
                        <StyledTableCell align="left">For Sale</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Area </StyledTableCell>
                        <StyledTableCell align="left">235 Sq. Yd.</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Posted at </StyledTableCell>
                        <StyledTableCell align="left">May 17, 2021</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}
export default React.memo(DetailsColumn2)