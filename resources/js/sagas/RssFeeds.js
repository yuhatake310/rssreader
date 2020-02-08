import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getRssFeeds, addFeed } from '../services/api';
import { READ_RSSFEEDS, ADD_FEED } from '../actions';
import { rssFetchSucceeded, rssFetchFailed, addFeedSucceeded, addFeedFailed } from '../actions';

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

function* addUrl(action) {
    const urlData = action.value.url;
    const response = yield call(addFeed, urlData);
    if (response) {
        yield put(addFeedSucceeded(response.data));
    } else {
        yield put(addFeedFailed('エラー'));
    }
}

export function* watchAddFeed() {
    yield takeLatest(ADD_FEED, addUrl);
}
