import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import { startSetRequests } from './store/actions/requests';
import { login, logout } from './store/actions/auth';
import { firebase } from './firebase/firebase';
import mySocket from './server/mySocket';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};


ReactDOM.render(
  <p>loading...</p>,
  document.getElementById('root')
);


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetRequests()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    console.log('log out');
  }
});

reportWebVitals();
