import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers';
import ErrorBoundary from './ErrorBoundary';

import Home from './components/home/presentational/Home';

import './App.css';

const initialState = {};

const muiTheme = createMuiTheme({
  fontFamily: '"Segoe UI"'
});

const store = createStore(
  rootReducer,
  initialState
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
