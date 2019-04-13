import React, {Component} from 'react';
import AppBar from '../../appBar/presentational/AppBar';
import MarketWatch from  '../../marketWatch/presentational/MarketWatch';
import Portfolio from '../../portfolio/presentational/Portfolio';

import '../Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
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
