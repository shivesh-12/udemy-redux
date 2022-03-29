import React from 'react';
import classes from './Header.module.css';

const Header = () => {
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
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {showMenu()}
    </header>
  );
};

export default Header;
