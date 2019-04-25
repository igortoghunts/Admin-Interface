import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegisterForm = props =>  (
    <div className="ui grid segment">
        <div className="ui segment inverted">
            <form className="ui inverted form " onSubmit={props.handleSubmit(props.onSubmit)}>
                <div className="">
                    <div className="field">
                        <Field name="email" type="email" label="Email" component="input"  />
                    </div>
                    <div className="field">
                        <Field name="userName" type="text" label="Username" component="input" />
                    </div>
                    <div className="field">
                        <Field name="password" type="password" label="Password" component="input" />
                    </div>
                    <div className="field">
                        <Field name="checkbox" type="checkbox" component="input" />
                    </div>
                    <button className="ui submit button">Submit</button>
                </div>
            </form>
        </div>
    </div>
);

export  default reduxForm({
    form: 'register',
})(RegisterForm);
