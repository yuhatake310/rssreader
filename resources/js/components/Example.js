import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {
    constructor() {
        super();

        this.state = {
            rssfeeds: []
        };
    }

    componentDidMount() {
        axios
            .get('/api/rssfeeds')
            .then(response => {
                this.setState({ rssfeeds: response.data });
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    renderRssFeeds() {
        if (this.state.rssfeeds.length === 0) {
            return;
        }
        return this.state.rssfeeds.map(rssfeed => {
            return (
                <li key={rssfeed.url[0]}>
                    {rssfeed.site[0]}: {rssfeed.title[0]}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.renderRssFeeds()}
                </ul>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
