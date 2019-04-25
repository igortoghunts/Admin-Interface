import React, { Component } from 'react';
import { database } from '../../apis/firebase/firebase';

class Home extends Component{

    handleSubmit = values => {
        console.log(values);
    };

    componentDidMount() {
        database.ref('./').on('value', () => {
            console.log('DATA CHANGES IN FIREBASE')
        });
    }

    render() {
        return (
            <div className="ui segment">

            </div>
        );
    }
}

export default Home;
