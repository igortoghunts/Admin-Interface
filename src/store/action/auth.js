import history from '../../apis/history';

export const signUp = (email, password) => {
  return dispatch => {
      // firebase.doCreateUserWithEmailAndPassword()
      //     .then(authUser => console.log(authUser))
      //     .catch(e => console.log('e11'))
  }
};

export const signIn = (user,email, password) => {
  history.push('/home');
  return dispatch => {
      dispatch({ type: 'USER_SIGN_IN', payload: user});
  }
};

export const signOut = (email, password) => {
  return dispatch => {
    // firebase.doCreateUserWithEmailAndPassword()
    //     .then(authUser => console.log(authUser))
    //     .catch(e => console.log('e11'))
  }
};

