import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

class ActionDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: props.cashBalance
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleClose = () => {
    this.props.onClose(this.state.cash);
  };

  handleChange = (event) => {
    this.setState({ cash : +event.target.value });
  }

  handleCancel = () => {
    this.props.onClose();
  }

  render() {
    const { onClose, cashBalance, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} className='dialog-container'>
        <DialogTitle id="simple-dialog-title">Cash </DialogTitle>
        <DialogContent>
            <DialogContentText>
              Current Balance: {cashBalance} 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Add Cash"
              type="number"
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
      </Dialog>
    );
  }
}

ActionDialog.propTypes = {
  onClose: PropTypes.func
};

export default ActionDialog;
