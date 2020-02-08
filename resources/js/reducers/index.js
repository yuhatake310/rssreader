import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import rss_feeds from './rss_feeds';

export default combineReducers({ rss_feeds, form });