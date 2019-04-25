import React, { Component } from 'react';
import Form from './Form/Form';

class Registration extends Component{

    state = {

    };

    handleSubmit = values => {
      console.log(values);
    };

    render() {
        return (
            <div className="ui segment">
                <Form onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default Registration;
