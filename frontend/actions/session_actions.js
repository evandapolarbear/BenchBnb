export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const logIn = user => ({
  type: LOGIN,
  user
});

export const logOut = () => ({
  type: LOGOUT
});

export const signUp = user => ({
  type: SIGNUP
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
