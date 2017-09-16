import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import storage from './model/storage'
import reducers from './redux/reducers'
import sagas from './redux/sagas'
import storageMiddleware from './redux/storageMiddleware'

const sagaMiddleware = createSagaMiddleware()

storage.get().then(initialState => {
    const store = createStore(reducers, initialState, compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(storageMiddleware),
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
    
    sagaMiddleware.run(sagas)

    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    );
    
    ReactDOM.render(app, document.getElementById('root'));
});


