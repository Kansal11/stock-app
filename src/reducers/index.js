import { combineReducers } from 'redux';

import app from './app';
import marketWatch from './marketWatch';

export default combineReducers({
    app,
    marketWatch
});