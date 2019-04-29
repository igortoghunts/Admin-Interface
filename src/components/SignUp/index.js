import React, { Component } from 'react';
import { connect } from 'react-redux';


import Form from '../forms/SignUp';
import { signUp } from './../../store/action'

class SignUp extends Component {

    render() {
        return (
            <div >
                <Form  signUp={this.props.signUp} />
            </div>
        );
    }
}

export default connect(null, { signUp })( SignUp );