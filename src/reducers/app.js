import { AppConstants } from '../constants';

const initialState = {
    isCashDialogOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.OPEN_CASH_DIALOG:
        return {
            ...state,
            isCashDialogOpen: true
        }
    default:
      return state;
  }
}
