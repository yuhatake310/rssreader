import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

import reducer from './reducers';
import RssFeeds from './components/rss_feeds';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <RssFeeds />
    </Provider>,
    document.getElementById('rssfeeds')
);