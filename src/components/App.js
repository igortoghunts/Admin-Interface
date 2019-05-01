import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import history from '../apis/history';

import Navigation from './Navigation';
import Account from './Account';
import Admin from './Admin';
import Home from './Home';
import Landing from './Landing';
import PasswordChange from './PasswordChange';
import PasswordForget from './PasswordForget';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div className="ui inverted segment">
                        <Navigation authUser={this.props.user}/>
                    </div>
                    <div className="ui segment">
                        <Route path={ROUTES.SIGN_UP} component={SignUp} exact/>
                        <Route path={ROUTES.SIGN_IN} component={SignIn} exact/>
                        {/*<Home/>*/}
                        {/*<Account/>*/}
                        {/*<Admin/>*/}
                        <Route path={ROUTES.LANDING} component={Landing} exact/>
                        {/*<PasswordForget/>*/}
                        {/*<PasswordChange/>*/}
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
};

export default connect(mapStateToProps)(App);


