import { AppConstants } from '../constants';

const initialState = {
    holdings: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.BUY_SUCCESSFUL: {
        return {
            ...state,
            holdings: [
                ...state.holdings,
                action.payload.stockBought
            ]
        }
    }
    case AppConstants.EXISTING_HOLDINGS_FETCHED: {
        return {
            ...state,
            holdings: action.payload
        }
    }
    default:
      return state;
  }
}
