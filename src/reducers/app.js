import { AppConstants } from '../constants';

const initialState = {
    isCashDialogOpen: false,
    cashBalance: 0,
    isBuyDialogOpen: false,
    stockBeingBought: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.OPEN_CASH_DIALOG:
        return {
            ...state,
            isCashDialogOpen: true
        }
    case AppConstants.CLOSE_CASH_DIALOG: {
        return {
            ...state,
            cashBalance : action.payload ? (state.cashBalance + action.payload) : state.cashBalance,
            isCashDialogOpen: false
        }
    }
    case AppConstants.OPEN_BUY_DIALOG: {
        return {
            ...state,
            isBuyDialogOpen : true,
            stockBeingBought : action.payload
        }
    }
    case AppConstants.CLOSE_BUY_DIALOG: {
        return {
            ...state,
            isBuyDialogOpen : false
        }
    }
    default:
      return state;
  }
}
