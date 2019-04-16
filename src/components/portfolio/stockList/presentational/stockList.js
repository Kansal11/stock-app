import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: '0px',
    height: '300px',
    maxHeight: '300px'
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes, holdings } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Stock</CustomTableCell>
            <CustomTableCell align="right">Symbol</CustomTableCell>
            <CustomTableCell align="right">Qty.</CustomTableCell>
            <CustomTableCell align="right">Price/share</CustomTableCell>
            <CustomTableCell align="right">Total Cost</CustomTableCell>
            {/* <CustomTableCell align="right">Actions</CustomTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {!holdings || holdings.length === 0 ? <TableRow>
            <CustomTableCell colspan="5">"Please search and add stocks to buy"</CustomTableCell>
          </TableRow> : null}
          {holdings.map((row,idx) => (
            <TableRow className={classes.row} key={idx}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.symbol}</CustomTableCell>
              <CustomTableCell align="right">{row.qty}</CustomTableCell>
              <CustomTableCell align="right">{row.price}</CustomTableCell>
              <CustomTableCell align="right">{(row.price*row.qty).toFixed(2)}</CustomTableCell>
              {/* <CustomTableCell align="right">
                <Button variant="contained" color="primary" className='add-btn' onClick={() => this.props.openBuyDialog()}>
                    Buy
                </Button>
              </CustomTableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);