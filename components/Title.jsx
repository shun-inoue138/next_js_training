import React from 'react';
import styles from '../styles/Home.module.css';

const Title = ({ children }) => {
  const fileName = children.toLowerCase();
  return (
    <>
      <h1 className={styles.title}>{`${children} Page`}</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>{`pages/${fileName}.js`}</code>
      </p>
    </>
  );
};

export default Title;
