import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './reducers/index';

const muiTheme = getMuiTheme({
    fontFamily: 'Beaufort',
    canvasColor: '#77A6D6',
    borderColor: '#C69E55',
    palette: {
        primary1Color: '#325370',
        primary2Color: '#0B2238',
        primary3Color: '#77A6D6',
        accent1Color: '#C69E55',
        accent2Color: '#8AD7D4',
        accent3Color: '#CCCDFD'
    },
    labelWrapped: {
        fontSize: '0.875rem'
    }
});

const reduxStore = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
