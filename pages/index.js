import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Links from '../components/Links';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>Index</Main>
      <Footer />
    </div>
  );
}
