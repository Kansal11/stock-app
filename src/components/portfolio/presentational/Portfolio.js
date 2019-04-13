import React, {Component} from 'react';
import StockList from '../stockList/presentational/stockList';

import '../Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className='portfolio-container'>
                    <div>
                        Holdings 
                        <span> 18 </span>
                    </div>
                    <StockList />
                </div>
            </div>
        )
    }
}

export default Portfolio;