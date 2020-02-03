export const READ_RSSFEEDS = 'READ_RSSFEEDS';
export const RSS_FETCH_SUCCEEDED = 'RSS_FETCH_SUCCEEDED';
export const RSS_FETCH_FAILED = 'RSS_FETCH_FAILED';

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
