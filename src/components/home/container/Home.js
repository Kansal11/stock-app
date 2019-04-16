import { connect } from 'react-redux'
import Home from '../presentational/Home';
import { AppConstants } from '../../../constants';

const mapStateToProps = state => ({
	isCashDialogOpen: state.app.isCashDialogOpen,
	cashBalance: state.app.cashBalance,
	isBuyDialogOpen: state.app.isBuyDialogOpen,
	stockBeingBought: state.app.stockBeingBought,
	currentStockPrice: state.marketWatch.currentStockPrice
});

const mapDispatchToProps = dispatch => ({
  	openCashDialog: () => {
		dispatch({
			type: AppConstants.OPEN_CASH_DIALOG
		});
	},
	closeCashDialog: (cash) => {
		dispatch({
			type: AppConstants.CLOSE_CASH_DIALOG,
			payload: cash
		});
	},
	closeBuyDialog: (stockInfo) => {
		dispatch({
			type: AppConstants.CLOSE_BUY_DIALOG,
			payload: stockInfo
		});
	},
	getQuote: () => {
		dispatch({
			type: AppConstants.GET_STOCK_QUOTE_REQUESTED
		});
	},
	fetchCashBalance: () => {
		dispatch({
			type: AppConstants.GET_CASH_BALANCE_REQUESTED
		});
	}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
