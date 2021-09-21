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

const AgentContactDetail = ({ agentName, email, address, mobilePhone, officePhone }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableBody>
                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading} >Name </StyledTableCell>
                        <StyledTableCell align="left">{agentName}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Email </StyledTableCell>
                        <StyledTableCell align="left">{email}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Address </StyledTableCell>
                        <StyledTableCell align="left">{address}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Mobile No </StyledTableCell>
                        <StyledTableCell align="left">{mobilePhone}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow >
                        <StyledTableCell component="th" scope="row" className={classes.tableHeading}>Office No </StyledTableCell>
                        <StyledTableCell align="left">{officePhone}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}
export default React.memo(AgentContactDetail)