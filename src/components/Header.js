import React from 'react';
import classes from './Header.module.css';

const Header = ({ isLoggedIn, logoutHandler }) => {
  const showMenu = () => {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && showMenu()}
    </header>
  );
};

export default Header;
