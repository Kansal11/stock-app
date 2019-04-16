import React, {Component} from 'react';
import AppBar from '../../appBar/presentational/AppBar';
import { MarketWatch } from  '../../marketWatch';
import { Portfolio } from '../../portfolio';
import ActionDialog from '../../dialog/actionDialog';
import BuyDialog from '../../dialog/buyDialog';

import '../Home.css';

class Home extends Component {

    componentDidMount() {
        this.props.fetchCashBalance(); 
    }

    render() {
        const { isCashDialogOpen, cashBalance, isBuyDialogOpen, stockBeingBought, currentStockPrice } = this.props;

        return (
            <div>
                <ActionDialog open={isCashDialogOpen} onClose={this.props.closeCashDialog} cashBalance={cashBalance}/>
                {isBuyDialogOpen && <BuyDialog 
                open={isBuyDialogOpen} 
                onClose={this.props.closeBuyDialog} 
                price={currentStockPrice} 
                stock={stockBeingBought} 
                cashBalance={cashBalance}
                getQuote = {this.props.getQuote}/>}
                <AppBar 
                    isCashDialogOpen = {isCashDialogOpen}
                    openCashDialog = {this.props.openCashDialog}
                    cashBalance = {cashBalance}
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
