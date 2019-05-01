import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withFirebase } from '../../../apis/firebase';

class SignInForm extends Component {

    onSubmit = values => {
        const { email, password } = values;

        this.props.firebase.doSignInWhitEmailAndPassword(email, password)
            .then(user => {
                this.props.signIn(user);
            })
            .catch(e => console.log(e))
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
                        <button className="ui button" /*disabled={isInvalid}*/ >Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withFirebase(reduxForm({
    form: 'signUp'
})( SignInForm ));

