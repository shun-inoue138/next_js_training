import React, { useState } from 'react';
import classes from './Links.module.css';

const Links = ({ linkItems, handleReduce }) => {
  return (
    <div className={classes.grid}>
      <div>
        <button
          onClick={() => {
            handleReduce();
          }}
        >
          減らす
        </button>
      </div>
      {linkItems.map((item) => {
        return (
          <a href={item.url} className={classes.card} key={item.url}>
            <h2>{item.title} &rarr;</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Links;
