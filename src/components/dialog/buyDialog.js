import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '../progress/circularProgress';

class BuyDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: props.cashBalance,
      stockPrice: null,
      isStockPriceLoading: false,
      qty: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleClose = () => {
    this.props.onClose({
      qty: this.state.qty,
      price: this.props.price
    });
  };

  handleChange = (event) => {
    this.setState({ qty : +event.target.value });
  }

  handleCancel = () => {
    this.props.onClose();
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.price && nextProps && nextProps.price) {
      this.setState({
        isStockPriceLoading: false
      })
    }
  }

  componentDidMount() {
    this.props.getQuote();
    this.setState({
      isStockPriceLoading: true
    })
    this.timerID = setInterval(
      () => this.props.getQuote(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { onClose, stock, price, cashBalance, ...other } = this.props;

    const buyPrice = price && (price*this.state.qty).toFixed(2);

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} className='dialog-container'>
        <DialogTitle id="simple-dialog-title">{stock["2. name"]} </DialogTitle>
        <DialogContent>
            <DialogContentText>
              Current Price:
              {this.state.isStockPriceLoading && <CircularProgress />}
              {!this.state.isStockPriceLoading && <span> {price && price.toFixed(2)}</span>}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Buy Quantity"
              type="number"
              value={this.state.qty}
              onChange={this.handleChange}
              fullWidth
            />
            {buyPrice && <DialogContentText>
              Cash Required: {buyPrice}
            </DialogContentText>}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" disabled={!price || buyPrice > cashBalance}>
              Confirm
            </Button>
          </DialogActions>
      </Dialog>
    );
  }
}

BuyDialog.propTypes = {
  onClose: PropTypes.func
};

export default BuyDialog;
