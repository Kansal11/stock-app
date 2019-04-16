import { combineReducers } from 'redux';

import app from './app';
import marketWatch from './marketWatch';
import portfolio from './portfolio';

export default combineReducers({
    app,
    marketWatch,
    portfolio
});