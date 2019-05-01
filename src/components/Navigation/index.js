import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ROUTES from '../../constants/routes';
import SignOut from "../SignOut";


class Navigation extends Component{
    render() {
        console.log(this.props.authUser.user);
        return (
            <div className="ui inverted secondary pointing menu">
                {
                    this.props.authUser.user?(
                        <>
                            <p className="item">
                                <Link to={ROUTES.HOME}>Home</Link>
                            </p>
                            <p className="item">
                                <Link to={ROUTES.ACCOUNT}>Account</Link>
                            </p>
                            <div className="right menu">
                                <div className="item">
                                    <a className="">Change Password</a>
                                </div>
                                <div className="item">
                                    <SignOut />
                                </div>
                            </div>
                        </>
                    ):(
                        <>
                            <p className="item">
                                <Link to={ROUTES.LANDING}>Landing</Link>
                            </p>
                            <div className="right menu">
                                <p className="item">
                                    <Link to={ROUTES.SIGN_UP} >Sign Up</Link>
                                </p>
                                <p className="item">
                                    <Link to={ROUTES.SIGN_IN} >Sign In</Link>
                                </p>
                            </div>
                            {/*<p className="item">*/}
                            {/*    <Link to={ROUTES.ADMIN}>Admin</Link>*/}
                            {/*</p>*/}
                        </>
                    )
                }
            </div>
        );
    }
}

export default connect()(Navigation);

