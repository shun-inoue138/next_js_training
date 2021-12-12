import React from 'react';
import classes from './Main.module.css';
import Title from '../Title';
import Links from '../Links';

const Main = ({ children }) => {
  return (
    <div>
      <main className={classes.main}>
        <Title>{children}</Title>
        <Links />
      </main>
    </div>
  );
};

export default Main;
