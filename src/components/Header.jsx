import React from 'react';
import Link from 'next/link';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.heading}>
      <Link href="/">
        <a className={classes.anchor}>index</a>
      </Link>
      <Link href="/about">
        <a className={classes.anchor}>about</a>
      </Link>
    </header>
  );
};

export default Header;
