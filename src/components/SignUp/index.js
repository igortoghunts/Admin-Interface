import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class SignUp extends Component {

    onSubmit = values => {
        console.log(values);
    };

    render() {
        return (
            <div className="ui four column grid segment">
                <div className="ui segment inverted">
                    <form className="ui inverted form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <p className="item">
                            <Field type="email" name="email" component="input" />
                        </p>
                        <p className="item">
                            <Field type="password" name="password" component="input" />
                        </p>
                        <button className="ui button">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'signUp'
})( SignUp );

