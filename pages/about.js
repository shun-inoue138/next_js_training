import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Links from '../components/Links';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Main from '../components/Main';
import Header from '../components/Header';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>About</Main>

      <Footer />
    </div>
  );
}
