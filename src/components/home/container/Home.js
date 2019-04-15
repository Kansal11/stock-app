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
	closeBuyDialog: (cash) => {
		dispatch({
			type: AppConstants.CLOSE_BUY_DIALOG,
			payload: cash
		});
	},
	getQuote: () => {
		dispatch({
			type: AppConstants.GET_STOCK_QUOTE_REQUESTED
		});
	}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
