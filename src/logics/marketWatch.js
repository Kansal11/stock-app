import { createLogic } from 'redux-logic';
import { getSearchResults, getStockQuote } from '../modules/marketWatch';
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

//  const buyStockLogic = createLogic({
// 	type: AppConstants.BUY_STOCK_REQUESTED,
// 	process({ getState, action }, dispatch, done) {	
// 		done();
// 	}
//  })

 const getStockPriceLogic = createLogic({
	type: AppConstants.GET_STOCK_QUOTE_REQUESTED,
    latest: true,
	process({ getState, action }, dispatch, done) {	
		const { stockBeingBought } = getState().app;
		return getStockQuote(stockBeingBought["1. symbol"])
		.then(result => {
			dispatch({
				type: AppConstants.STOCK_QUOTE_FETCHED,
				payload: result.bestMatches
			});	
			done();		
		})
		.catch(err => {	
			dispatch({
				type: AppConstants.STOCK_QUOTE_FETCH_FAILED,
			});
			done();
		});
	}
 });

 const addStockLogic = createLogic({
	type: AppConstants.ADD_STOCK_REQUESTED,
	process({ getState, action }, dispatch, done) {
		let existingStocks = localStorage.getItem('stocks');
		if(!existingStocks) {
			existingStocks = [];
		}
		else {
			existingStocks = JSON.parse(existingStocks);
		}
		existingStocks.push(action.payload);
		localStorage.setItem('stocks', JSON.stringify(existingStocks));
		dispatch({
			type: AppConstants.ADD_STOCK_SUCCEEDED,
			payload: existingStocks
		})
	}
 })

 const getStocksLogic = createLogic({
	 type: AppConstants.FETCH_EXISTING_STOCKS,
	 process({ getState, action }, dispatch, done) {
		let existingStocks = localStorage.getItem('stocks');
		if(existingStocks) {
			existingStocks = JSON.parse(existingStocks);
		}
		else {
			existingStocks = [];
		}
		dispatch({
			type: AppConstants.EXISTING_STOCKS_FETCHED,
			payload: existingStocks
		})
		done();
	}
 })

 const removeStockLogic = createLogic({
	type: AppConstants.REMOVE_EXISTING_STOCK,
	process({ getState, action }, dispatch, done) {
	   let existingStocks = localStorage.getItem('stocks');
	   if(existingStocks) {
		   existingStocks = JSON.parse(existingStocks);
	   }
	   const idx = existingStocks.findIndex(stockObj => stockObj["2. name"] === action.payload["2. name"] && stockObj["1. symbol"] === action.payload["1. symbol"]);
	   existingStocks.splice(idx, 1);
	   localStorage.setItem('stocks', JSON.stringify(existingStocks));
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
	getStocksLogic,
	removeStockLogic,
	// buyStockLogic,
	getStockPriceLogic
];