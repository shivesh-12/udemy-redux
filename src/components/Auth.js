import React from 'react';

import classes from './Auth.module.css';

const Auth = ({ loginHandler }) => {
  const clickHandler = (event) => {
    event.preventDefault();
    loginHandler();
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={clickHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
