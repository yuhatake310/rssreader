import { call, all } from 'redux-saga/effects';
import { watchReadRssFeeds } from './RssFeeds';

export default function* rootSaga() {
    yield all([
        call(watchReadRssFeeds),
    ]);
}
