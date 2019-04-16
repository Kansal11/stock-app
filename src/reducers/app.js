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
            isCashDialogOpen: false
        }
    }
    case AppConstants.ADD_CASH_REQUESTED: {
        return {
            ...state,
            cashBalance: action.payload
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
    case AppConstants.BUY_SUCCESSFUL: {
        return {
            ...state,
            cashBalance: action.payload.updatedBalance
        }
    }
    default:
      return state;
  }
}
