export const READ_RSSFEEDS = 'READ_RSSFEEDS';
export const RSS_FETCH_SUCCEEDED = 'RSS_FETCH_SUCCEEDED';
export const RSS_FETCH_FAILED = 'RSS_FETCH_FAILED';
export const ADD_FEED = 'ADD_FEED';
export const ADD_FEED_SUCCEEDED = 'ADD_FEED_SUCCEEDED';
export const ADD_FEED_FAILED = 'ADD_FEED_FAILED';

export const readRssFeeds = () => ({
    type: READ_RSSFEEDS,
});

export const rssFetchSucceeded = (payload, meta) => ({
    type: RSS_FETCH_SUCCEEDED,
    payload,
    meta,
});

export const rssFetchFailed = (payload) => ({
    type: RSS_FETCH_FAILED,
    error: true,
    payload,
});

export const addFeed = (value) => ({
    type: ADD_FEED,
    value,
});

export const addFeedSucceeded = (payload, meta) => ({
    type: ADD_FEED_SUCCEEDED,
    payload,
    meta,
});

export const addFeedFailed = (payload) => ({
    type: ADD_FEED_FAILED,
    error: true,
    payload,
});
