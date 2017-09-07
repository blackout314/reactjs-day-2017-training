import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import reducers from './redux/reducers'
import storage from './model/storage'
import storageMiddleware from './redux/storageMiddleware'

storage.get().then(initialState => {
    const store = createStore(reducers, initialState, compose(
        applyMiddleware(storageMiddleware),
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
    
    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    );
    
    ReactDOM.render(app, document.getElementById('root'));
});


