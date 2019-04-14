import { connect } from 'react-redux'
import MarketWatch from '../presentational/MarketWatch';
import { AppConstants } from '../../../constants';

const mapStateToProps = state => ({
	searchResults: state.marketWatch.searchResults,
    isSearchInProgress: state.marketWatch.isSearchInProgress,
    existingStocks: state.marketWatch.existingStocks
});

const mapDispatchToProps = dispatch => ({
    searchStock: (searchTerm) => {
        dispatch({
            type: AppConstants.SEARCH_RESULTS_REQUESTED,
            payload: searchTerm
        })
    },
    addStockToMW: (stockObj) => {
        dispatch({
            type: AppConstants.ADD_STOCK_REQUESTED,
            payload: stockObj
        })
    },
	fetchExistingStocks: () => {
		dispatch({
			type: AppConstants.FETCH_EXISTING_STOCKS
		})
    },
    removeSearchResults: () => {
        dispatch({
			type: AppConstants.CLEAR_SEARCH_RESULTS
		})
    },
    removeStock: (stockObj) => {
        dispatch({
            type: AppConstants.REMOVE_EXISTING_STOCK,
            payload: stockObj
        })
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWatch)
