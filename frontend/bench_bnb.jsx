import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, signIn, signOut} from './util/session_api_util';
import configureStore from './store/store';

window.signUp = signUp;
window.signIn = signIn;
window.signOut = signOut;
window.store = configureStore();


document.addEventListener('DOMContentLoaded', () => {
  let rootDiv = document.getElementById("root");

  ReactDOM.render(<h1>Heyooo!</h1>, rootDiv);
  }
);
