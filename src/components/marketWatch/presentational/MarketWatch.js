import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import '../MarketWatch.css';

class MarketWatch extends Component {

    generate(element) {
        return [0, 1, 2].map(value =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    render() {
        return (
            <div>
                <div className='marketwatch-container'>
                    <div className='search'>
                        <div className='search-icon'>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                        />
                    </div>
                    <Grid item xs={12} md={6}>
                        <div className=''>
                            <List>
                                {this.generate(
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton aria-label="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default MarketWatch;
