import { RSS_FETCH_SUCCEEDED } from '../actions';

export default (feeds = {}, action) => {
    switch (action.type) {
        case RSS_FETCH_SUCCEEDED:
            return Object.assign({}, feeds, {
                feeds: action.payload,
            });
        default:
            return feeds;
    }
};
