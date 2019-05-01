const initialState = {
   user: false
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
       case 'USER_SIGN_IN': return {...state, user: action.payload};
       case 'USER_SIGN_UP': return {...state, user: true};
       default: return state;
    }
};

