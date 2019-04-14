import React, {Component} from 'react';
import AppBar from '../../appBar/presentational/AppBar';
import MarketWatch from  '../../marketWatch/presentational/MarketWatch';
import Portfolio from '../../portfolio/presentational/Portfolio';
import ActionDialog from '../../dialog/actionDialog';

import '../Home.css';

class Home extends Component {

    render() {
        const { isCashDialogOpen } = this.props;

        return (
            <div>
                <ActionDialog open={isCashDialogOpen} onClose={this.props.closeCashDialog}/>
                <AppBar 
                    isCashDialogOpen = {isCashDialogOpen}
                    openCashDialog = {this.props.openCashDialog}
                />
                <div className='home-container'>
                    <div className='container-left'>
                        <MarketWatch />
                    </div>
                    <div className='container-right'>
                        <Portfolio />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
