import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { addFeed } from '../actions';

class RssFeedsNew extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field;

        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        );
    }

    async onSubmit(value) {
        await this.props.addFeed(value);
        this.props.history.push('/');
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="URL" name="url" type="url" component={this.renderField} /></div>

                <div>
                    <input type="submit" value="登録" disabled={pristine || submitting || invalid} />
                    <Link to="/">戻る</Link>
                </div>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.url) errors.url = "URLを入力してください。";

    return errors;
};

const mapDispatchToProps = ({ addFeed });

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'feedNewForm' })(RssFeedsNew)
);