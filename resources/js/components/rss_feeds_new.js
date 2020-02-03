import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { addFeed } from '../actions';

class RssFeedsNew extends Component {
    render() {
        return (
            <React.Fragment>
                <div>foo</div>
            </React.Fragment>
        );
    }
}

// const mapDispatchToProps = ({ addFeed });

export default connect(null, null)(RssFeedsNew);