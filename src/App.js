import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers';
import logics from './logics';
import ErrorBoundary from './ErrorBoundary';

import { Home } from './components/home';

import './App.css';

const initialState = {};

const muiTheme = createMuiTheme({
  fontFamily: '"Segoe UI"'
});

const deps = {}

const logicMiddleware = createLogicMiddleware(logics, deps);

const composedEnhancers = compose(
	applyMiddleware(logicMiddleware)
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

class App extends Component {
  render() {
    return (
      < ErrorBoundary >
        <Provider store={store}>
          {/* <ConnectedRouter history={history}> */}
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <Home />
              {/* <Routes />
              <ToastContainer
                style={{ top: "70px", minWidth: "450px", zIndex: 20001 }}
              />
              <Notification /> */}
            </div>
          </MuiThemeProvider>
          {/* </ConnectedRouter> */}
        </Provider>
      </ErrorBoundary >
    );
  }
}

export default App;
