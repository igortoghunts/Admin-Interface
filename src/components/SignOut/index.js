import React from 'react';

import { withFirebase } from '../../apis/firebase';

const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut} className="ui button">
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);

