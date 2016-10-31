import { signUp, logIn, logOut } from '../util/session_api_util';
import {receiveCurrentUser,
        receiveErrors,
        LOGIN,
        LOGOUT,
        SIGNUP
      } from '../actions/session_actions';


const SessionMiddleware = ({dispactch}) => next => action => {
  const successCall = user => dispactch(receiveCurrentUser(user));
  const errorCall = error => dispactch(receiveErrors(error.responseJSON));

  switch(action.type){
    case LOGIN:
      logIn(action.user, successCall, errorCall);
      return next(action);
    case LOGOUT:
      logOut(successCall, errorCall);
      return next(action);
    case SIGNUP:
      signUp(action.user, successCall, errorCall);
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
