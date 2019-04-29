import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';

import { Firebase, FirebaseContext } from './apis/firebase';

const Index = () => {
    return (
        <Provider store={store}>
            <FirebaseContext.Provider value={new Firebase()} >
                <App />
            </FirebaseContext.Provider>
        </Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));