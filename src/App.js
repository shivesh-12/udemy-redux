import React, { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header
        isLoggedIn={isAuth}
        logoutHandler={dispatch(authActions.logout)}
      />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  ); 
}

export default App;
