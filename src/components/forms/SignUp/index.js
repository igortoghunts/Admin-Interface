import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withFirebase } from '../../../apis/firebase';

class SignUpForm extends Component {

    onSubmit = values => {
        const { email, password } = values;

        this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
            .then(d => console.log(d))
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
                        <button className="ui button" /*disabled={isInvalid}*/>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withFirebase(reduxForm({
    form: 'signUp'
})( SignUpForm ));

