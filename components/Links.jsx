import React from 'react';
import classes from './Links.module.css';

const Links = () => {
  const linkDatas = [
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
  return (
    <div className={classes.grid}>
      {linkDatas.map((linkData) => {
        return (
          <a href={linkData.url} className={classes.card} key={linkData.url}>
            <h2>{linkData.title} &rarr;</h2>
            <p>{linkData.description}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Links;
