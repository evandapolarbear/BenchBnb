import React from 'react';
import ReactDOM from 'react-dom';
import {signUp,
        logIn,
        logOut
      } from './actions/session_actions';
import configureStore from './store/store';


window.signUp = signUp;
window.logIn = logIn;
window.logOut = logOut;
window.store = configureStore();


document.addEventListener('DOMContentLoaded', () => {
  let rootDiv = document.getElementById("root");

  ReactDOM.render(<h1>Heyooo!</h1>, rootDiv);
  }
);
