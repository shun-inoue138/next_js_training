import React, { useState } from 'react';
import classes from './Main.module.css';
import Title from '../Title';
import Links from '../Links';

const initialLinkItems = [
  {
    url: 'https://nextjs.org/docs',
    title: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    url: 'https://nextjs.org/learn',
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    url: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    url:
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

const Main = ({ children }) => {
  const [linkItems, setLinkItems] = useState(initialLinkItems);
  const handleReduce = () => {
    setLinkItems((prevLinkItems) =>
      prevLinkItems.slice(0, prevLinkItems.length - 1)
    );
  };
  return (
    <div>
      <main className={classes.main}>
        <Title>{children}</Title>
        <Links linkItems={linkItems} handleReduce={handleReduce} />
      </main>
    </div>
  );
};

export default Main;
