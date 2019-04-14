import { connect } from 'react-redux'
import MarketWatch from '../presentational/MarketWatch';
import { AppConstants } from '../../../constants';

const mapStateToProps = state => ({
	searchResults: state.marketWatch.searchResults,
	isSearchInProgress: state.marketWatch.isSearchInProgress,
});

const mapDispatchToProps = dispatch => ({
    searchStock: (searchTerm) => {
        dispatch({
            type: AppConstants.SEARCH_RESULTS_REQUESTED,
            payload: searchTerm
        })
    },
    addDtockToMW: (stockObj) => {
        dispatch({
            type: AppConstants.ADD_STOCK_REQUESTED,
            payload: stockObj
        })
    },
	fetchExistingStocks: () => {
		dispatch({
			type: AppConstants.FETCH_EXISTING_STOCKS
		})
	}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWatch)
