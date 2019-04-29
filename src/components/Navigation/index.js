import React from 'react';
import { Link } from 'react-router-dom';


import * as ROUTES from '../../constants/routes';

const Navigation = () => (
        <div className="ui inverted secondary pointing menu">
            <p className="item">
                <Link to={ROUTES.SIGN_UP} >Sign Up</Link>
            </p>
            <p className="item">
                <Link to={ROUTES.HOME}>Home</Link>
            </p>
            <p className="item">
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </p>
            <p className="item">
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </p>
            <p className="item">
                <Link to={ROUTES.LANDING}>Landing</Link>
            </p>
        </div>
);

export default Navigation;