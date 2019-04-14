import { createLogic } from 'redux-logic';
import { getSearchResults } from '../modules/marketWatch';
import { AppConstants } from '../constants';

const searchStockLogic = createLogic({
	type: AppConstants.SEARCH_RESULTS_REQUESTED,
    latest: true,
    debounce: 300,
	process({ getState, action }, dispatch, done) {	
		return getSearchResults(action.payload)
		.then(result => {
			dispatch({
				type: AppConstants.SEARCH_RESULTS_SUCCEEDED,
				payload: result.bestMatches
			});	
			done();		
		})
		.catch(err => {	
			dispatch({
				type: AppConstants.SEARCH_RESULTS_FAILED,
			});
			done();
		});
	}

 });

 const addStockLogic = createLogic({
	type: AppConstants.ADD_STOCK_REQUESTED,
	process({ getState, action }) {
		let existingStocks = localStorage.getItem('stocks');
		if(!existingStocks) {
			existingStocks = [];
		}
		existingStocks.push(action.payload);
		localStorage.setItem('stocks', existingStocks);
	}
 })

 const getStocksLogic = createLogic({
	 type: AppConstants.FETCH_EXISTING_STOCKS,
	 process({ getState, action }, dispatch, done) {
		const existingStocks = localStorage.getItem('stocks');
		dispatch({
			type: AppConstants.EXISTING_STOCKS_FETCHED,
			payload: existingStocks
		})
		done();
	}
 })

export default [
	searchStockLogic,
	addStockLogic,
	getStocksLogic
];