import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import '../MarketWatch.css';

class MarketWatch extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchExistingStocks();
    }

    onSearch(event) {
        if (event.target.value && event.target.value.length > 2) {
            this.props.searchStock(event.target.value)
        }
    }

    render() {
        const { searchResults } = this.props;
        return (
            <div className='marketwatch-container'>
                <div className='search'>
                    <div className='search-input-container'>
                        <div className='search-icon'>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…" className="search-input"
                            onChange={this.onSearch}
                        />
                    </div>
                    <div className='search-box-wrap'>
                        <ul className='search-results'>
                            {searchResults.map((stockObj, idx) => {
                                return (
                                    <li className='search-result-item' key={idx}>
                                        <span>{stockObj["2. name"]}</span>
                                        <Button variant="contained" color="primary" className='add-btn' onClick={(stockObj) => this.props.addDtockToMW(stockObj)}>
                                            Add
                                        </Button>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>

                </div>
                <Grid item xs={12} md={6} className='market-watch'>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Single-line item"
                            />
                            <ListItemSecondaryAction>
                                <Button variant="contained" color="primary" className='add-btn'>
                                    Buy
                                        </Button>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Grid>
            </div>
        )
    }
}

export default MarketWatch;