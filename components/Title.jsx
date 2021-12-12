import React from 'react';
import classes from './Title.module.css';

const Title = ({ children }) => {
  const fileName = children.toLowerCase();
  return (
    <>
      <h1 className={classes.title}>{`${children} Page`}</h1>

      <p className={classes.description}>
        Get started by editing{' '}
        <code className={classes.code}>{`pages/${fileName}.js`}</code>
      </p>
    </>
  );
};

export default Title;
