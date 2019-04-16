import { connect } from 'react-redux'
import PortFolio from '../presentational/Portfolio';
import { AppConstants } from '../../../constants';

const mapStateToProps = state => ({
	holdings: state.portfolio.holdings
});

const mapDispatchToProps = dispatch => ({
  fetchExistingHoldings: () => {
      dispatch({
        type: AppConstants.FETCH_EXISTING_HOLDINGS
      })
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortFolio)
