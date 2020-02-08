import axios from 'axios';

const ROOT_URL = 'http://rssreader.test/api/rssfeeds';

export function getRssFeeds() {
  return axios.get(ROOT_URL);
}

export function addFeed(url) {
  return axios.post(ROOT_URL, { url: url });
}