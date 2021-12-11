import React from 'react';
import styles from '../styles/Home.module.css';
import Title from './Title';
import Links from './Links';

const Main = ({ children }) => {
  return (
    <div>
      <main className={styles.main}>
        <Title>{children}</Title>
        <Links />
      </main>
    </div>
  );
};

export default Main;
