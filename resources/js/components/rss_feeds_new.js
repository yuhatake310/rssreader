import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { addFeed } from '../actions';

class RssFeedsNew extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field;

        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched && error}
                {...input}
                fullWidth={true}
            />
        );
    }

    async onSubmit(value) {
        await this.props.addFeed(value);
        this.props.history.push('/');
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
        const style = { margin: 12 };

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="URL" name="url" type="url" component={this.renderField} /></div>

                <RaisedButton label="登録" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="戻る" style={style} containerElement={<Link to="/" />} />
            </form >
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