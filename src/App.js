import React, { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn/>
      {!isLoggedIn && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
