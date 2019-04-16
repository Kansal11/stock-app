import React, {Component} from 'react';
import StockList from '../stockList/presentational/stockList';

import '../Portfolio.css';

class Portfolio extends Component {

    componentDidMount() {
        this.props.fetchExistingHoldings();
    }

    render() {
        const { holdings } = this.props;

        return (
            <div>
                <div className='portfolio-container'>
                    <div className="header">
                        Holdings 
                        <span> {holdings.length} </span>
                    </div>
                    <StockList holdings={holdings}/>
                </div>
            </div>
        )
    }
}

export default Portfolio;