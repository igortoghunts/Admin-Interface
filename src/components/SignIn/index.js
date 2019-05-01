import React, { Component } from 'react';
import { connect } from 'react-redux';


import Form from '../forms/SignIn';
import { signIn } from './../../store/action'

class SignIn extends Component {

    render() {
        return (
            <div >
                <Form  signIn={this.props.signIn} />
            </div>
        );
    }
}

export default connect(null, { signIn })( SignIn );