import { fork } from 'redux-saga/effects';
import { watchReadRssFeeds, watchAddFeed } from './RssFeeds';

export default function* rootSaga() {
    yield fork(watchReadRssFeeds);
    yield fork(watchAddFeed);
}
