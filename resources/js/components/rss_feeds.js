import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { readRssFeeds } from '../actions';

class RssFeeds extends Component {
    componentDidMount() {
        this.props.readRssFeeds();
    }

    renderFeeds() {
        if (this.props.feeds === undefined) {
            return (
                <TableRow>
                    <TableRowColumn>右下のボタンからRSSフィードを登録してください。</TableRowColumn>
                </TableRow>
            );
        }
        return _.map(this.props.feeds, feed => (
            <TableRow key={feed.title[0]}>
                <TableRowColumn>
                    <a href={feed.url[0]} target="_blank">
                        {feed.title[0]}
                    </a>
                </TableRowColumn>
                <TableRowColumn>{feed.site[0]}</TableRowColumn>
                <TableRowColumn>{feed.date}</TableRowColumn>
            </TableRow >
        ));
    }

    render() {
        const style = {
            position: "fixed",
            right: 12,
            bottom: 12,
        };
        return (
            <React.Fragment>
                <FloatingActionButton style={style} containerElement={<Link to="/feeds/new" />}>
                    <ContentAdd />
                </FloatingActionButton>

                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>記事タイトル</TableHeaderColumn>
                            <TableHeaderColumn>サイト名</TableHeaderColumn>
                            <TableHeaderColumn>更新日時</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {this.renderFeeds()}
                    </TableBody>
                </Table >
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => {
    return { feeds: state.rss_feeds.feeds };
};

const mapDispatchToProps = ({ readRssFeeds });

export default connect(mapStateToProps, mapDispatchToProps)(RssFeeds);