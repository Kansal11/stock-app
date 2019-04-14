import AppConstants from '../constants/AppConstants';

const initialState = {
    searchResults: [],
    isSearchInProgress: false,
    existingStocks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.SEARCH_RESULTS_REQUESTED:
        return {
            ...state,
            searchResults: [],
            isSearchInProgress: true
        }
    case AppConstants.SEARCH_RESULTS_SUCCEEDED:
        return {
            ...state,
            isSearchInProgress: false,
            searchResults: action.payload
        }

    case AppConstants.CLEAR_SEARCH_RESULTS:
    case AppConstants.SEARCH_RESULTS_FAILED:
        return {
            ...state,
            isSearchInProgress: false,
            searchResults: []
        }
    case AppConstants.ADD_STOCK_SUCCEEDED: 
        return {
            ...state,
            searchResults: [],
            existingStocks: action.payload
        }
    case AppConstants.EXISTING_STOCKS_FETCHED: 
        return {
            ...state,
            existingStocks: action.payload
        }
    default:
      return state;
  }
}
