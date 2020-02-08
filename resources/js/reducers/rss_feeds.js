import {
    RSS_FETCH_SUCCEEDED,
    RSS_FETCH_FAILED,
    ADD_FEED_SUCCEEDED,
    ADD_FEED_FAILED
} from '../actions';

export default (feeds = {}, action) => {
    switch (action.type) {
        case RSS_FETCH_SUCCEEDED:
        case RSS_FETCH_FAILED:
        case ADD_FEED_SUCCEEDED:
        case ADD_FEED_FAILED:
            return Object.assign({}, feeds, {
                feeds: action.payload,
            });
        default:
            return feeds;
    }
};
