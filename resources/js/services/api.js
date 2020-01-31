import axios from 'axios';

export const ROOT_URL = 'http://rssreader.test/api/rssfeeds';

export function getRssFeeds() {
  return axios.get(ROOT_URL);
}
