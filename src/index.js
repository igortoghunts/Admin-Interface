import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';

import Firebase, { FirebaseContext } from './apis/firebase';

const Index = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()} >
            <Provider store={store}>
                <App />
            </Provider>
        </FirebaseContext.Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));