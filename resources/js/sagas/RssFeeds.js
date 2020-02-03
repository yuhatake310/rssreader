import { call, put, takeEvery } from 'redux-saga/effects';
import { getRssFeeds } from '../services/api';
import { READ_RSSFEEDS } from '../actions';
import { rssFetchSucceeded, rssFetchFailed } from '../actions';

function* fetchRss() {
    try {
        const response = yield call(getRssFeeds);
        const payload = response.data;
        const meta = { statusCode: response.status, statusText: response.statusText };
        yield put(rssFetchSucceeded(payload, meta));
    } catch (ex) {
        yield put(rssFetchFailed(ex));
    }
}

export function* watchReadRssFeeds() {
    yield takeEvery(READ_RSSFEEDS, fetchRss);
}