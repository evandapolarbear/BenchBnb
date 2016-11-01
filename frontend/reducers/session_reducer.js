import {RECEIVE_ERRORS,
        RECEIVE_CURRENT_USER,
        LOGOUT,
        logOut,
        receiveCurrentUser,
        receiveErrors
      } from '../actions/session_actions';

import {merge} from 'lodash';

const _default = {
    currentUser: null,
    errors: []
};

export const SessionReducer = (oldState = _default, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case(RECEIVE_ERRORS):
      return merge({}, oldState, action.errors);
      //action errors need to be placed inside curly braces to
      //make them an obj?
    case(RECEIVE_CURRENT_USER):
      return merge({}, oldState, {currentUser: action.user});
      //action errors need to be placed inside curly braces to
      //make them an obj?
    case(LOGOUT):
      return _default;
    default:
      return oldState;
  }
};
