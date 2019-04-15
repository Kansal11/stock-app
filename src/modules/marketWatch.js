import { sendRequest } from './request';
import { StaticConstants } from '../constants';

const getSearchResults = (searchTerm) => {
	let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${StaticConstants.ALPHAVANTAGE_API_KEY}`;

	return sendRequest(url, 'GET', {})
		.then(result => {
			return Promise.resolve(result);
		})
		.catch(err => Promise.reject(err));
};

const getStockQuote = (stockSymbol) => {
	let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${StaticConstants.ALPHAVANTAGE_API_KEY}`;

	return sendRequest(url, 'GET', {})
		.then(result => {
			return Promise.resolve(result);
		})
		.catch(err => Promise.reject(err));
}

export {
	getSearchResults,
	getStockQuote
}
