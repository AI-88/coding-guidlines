import React from 'react';
import classes from './Navbar.module.css';
// line 2: official docs uses:
// import styles from './Navbar.module.css' ive seen both used.
// **since the name can be w/e its important to be consistant.

/** <> </> is shorthand for React.Fragment */
const NavBar = () => {
  return (
    <>
      <div className={classes.NavContainer}>Some Random Text</div>
      <ul>
        <li>ItemOne</li>
        <li>ItemTwo</li>
      </ul>
    </>
  );
};

export default NavBar;
