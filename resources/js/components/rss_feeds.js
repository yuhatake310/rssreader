import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readRssFeeds } from '../actions'

class RssFeeds extends Component {
    componentDidMount() {
        this.props.readRssFeeds()
    }

    render() {
        const props = this.props

        return (
            <React.Fragment>
                <div>{console.log(props.feeds)}</div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ feeds: state.feeds });

const mapDispatchToProps = ({ readRssFeeds });

export default connect(mapStateToProps, mapDispatchToProps)(RssFeeds)