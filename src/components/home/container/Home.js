import { connect } from 'react-redux'
import Home from '../presentational/Home';
import { AppConstants } from '../../../constants';

const mapStateToProps = state => ({
	isCashDialogOpen: state.app.isCashDialogOpen
});

const mapDispatchToProps = dispatch => ({
  openCashDialog: () => {
		dispatch({
			type: AppConstants.OPEN_CASH_DIALOG
		});
	},
	closeCashDialog: () => {
		dispatch({
			type: AppConstants.CLOSE_CASH_DIALOG
		});
	}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
