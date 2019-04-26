import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navigation from './Navigation';
import Account from './Account';
import Admin from './Admin';
import Home from './Home';
import Landing from './Landing';
import PasswordChange from './PasswordChange';
import PasswordForget from './PasswordForget';
import SignIn from './SignIn';
import SignUp from './SignUp';


function App() {
  return (
      <div className="ui container">
        <Router>
            <div className="ui inverted segment">
                <Navigation/>
            </div>
            <div className="ui segment">
                {/*<SignIn/>*/}
                <SignUp/>
                {/*<Home/>*/}
                {/*<Account/>*/}
                {/*<Admin/>*/}
                {/*<Landing/>*/}
                {/*<PasswordForget/>*/}
                {/*<PasswordChange/>*/}
            </div>
        </Router>
      </div>
  );
}

export default App;
