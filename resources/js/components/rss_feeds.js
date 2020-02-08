import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readRssFeeds } from '../actions';

class RssFeeds extends Component {
    componentDidMount() {
        this.props.readRssFeeds();
    }

    renderFeeds() {
        return _.map(this.props.feeds, feed => (
            <tr key={feed.title[0]}>
                <td>{feed.title[0]}</td>
                <td>{feed.site[0]}</td>
                <td>{feed.date}</td>
            </tr>
        ));
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>記事タイトル</th>
                            <th>サイト名</th>
                            <th>更新日時</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderFeeds()}
                    </tbody>
                </table >

                <Link to="/feeds/new">New Feed</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { feeds: state.rss_feeds.feeds };
};

const mapDispatchToProps = ({ readRssFeeds });

export default connect(mapStateToProps, mapDispatchToProps)(RssFeeds);