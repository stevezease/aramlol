import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/animation.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './reducers/index';

const reduxStore = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
