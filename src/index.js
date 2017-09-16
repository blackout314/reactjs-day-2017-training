import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger'
import storage from './model/storage'
import coreReducers from './redux/core/core.reducers'
import uiReducers from './redux/ui/ui.reducers'
import coreSagas from './redux/core/core.sagas'
import uiSagas from './redux/ui/ui.sagas'
import storageMiddleware from './redux/storageMiddleware'
import { fork, all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware()

const rootSaga = function* () {
    yield all([
        fork(coreSagas),
        fork(uiSagas)
    ]);
}

const reducers = combineReducers({ 
    core: coreReducers, 
    ui: uiReducers 
});

storage.get().then(initialState => {
    const store = createStore(reducers, initialState, compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(storageMiddleware),
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
    
    sagaMiddleware.run(rootSaga)

    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    );
    
    ReactDOM.render(app, document.getElementById('root'));
});


