import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas/rootSaga';

import reducer from './reducers';
import RssFeeds from './components/rss_feeds';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    diff: true,
    collapsed: true,
});

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <RssFeeds />
    </Provider>,
    document.getElementById('rssfeeds')
);