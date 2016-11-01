import { signUp, logIn, logOut } from '../util/session_api_util';
import {receiveCurrentUser,
        receiveErrors,
        LOGIN,
        LOGOUT,
        SIGNUP
      } from '../actions/session_actions';


const SessionMiddleware = ({dispatch}) => next => action => {
  const successCall = user => dispatch(receiveCurrentUser(action.user));
  const errorCall = error => dispatch(receiveErrors(error.responseJSON));

  switch(action.type){
    case LOGIN:
      logIn(action.user, successCall, errorCall);
      return next(action);
    case LOGOUT:
      logOut(() => next(action), errorCall);
      break;
    case SIGNUP:
      signUp(action.user, successCall, errorCall);
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
