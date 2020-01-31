import { READ_RSSFEEDS } from '../actions'

export default (feeds = {}, action) => {
    switch (action.type) {
        case READ_RSSFEEDS:
            console.log(action)
            return feeds
        default:
            return feeds
    }
}