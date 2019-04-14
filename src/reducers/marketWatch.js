import AppConstants from '../constants/AppConstants';

const initialState = {
    searchResults: [],
    isSearchInProgress: false
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
    case AppConstants.SEARCH_RESULTS_FAILED:
        return {
            ...state,
            isSearchInProgress: false,
            searchResults: []
        }
    default:
      return state;
  }
}
