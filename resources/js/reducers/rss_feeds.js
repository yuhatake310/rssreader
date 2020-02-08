import {
    RSS_FETCH_SUCCEEDED,
    RSS_FETCH_FAILED,
    ADD_FEED_SUCCEEDED,
    ADD_FEED_FAILED
} from '../actions';

export default (feeds = {}, action) => {
    switch (action.type) {
        case RSS_FETCH_SUCCEEDED:
            return Object.assign({}, feeds, {
                feeds: action.payload,
            });
        case RSS_FETCH_FAILED:
            return Object.assign({}, feeds, {
                feeds: action.payload,
            });
        case ADD_FEED_SUCCEEDED:
            return Object.assign({}, feeds, {
                feeds: action.payload,
            });
        case ADD_FEED_FAILED:
            return Object.assign({}, feeds, {
                feeds: action.payload,
            });
        default:
            return feeds;
    }
};
