import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Links from '../components/Links';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Main from '../components/Main';
import Header from '../components/Header';
import { useCallback, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('hoge');
  const [isShow, setIsShow] = useState(true);
  const [numAry, setNumAry] = useState([1, 2, 5]);
  const handleClick = () => {
    setCount((count) => ++count);
  };
  const handleNumAry = () => {
    const additionalNum = Math.floor(Math.random() * 100);
    setNumAry((numAry) => [...numAry, additionalNum]);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow && <div>{count}</div>}
      <button
        onClick={() => {
          setIsShow((isShow) => !isShow);
        }}
      >
        表示切り替え
      </button>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        カウントアップ
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          if (e.target.value.length > 5) {
            alert('５文字以下で入力してください');
            return;
          }
          setText(e.target.value.trim());
        }}
      />
      <h3>ここに数値を出力</h3>
      <div>{numAry.map((num) => num)}</div>
      <button
        onClick={() => {
          handleNumAry();
        }}
      >
        ランダムで数値を追加
      </button>
      <Main>Index</Main>
      <Footer />
    </div>
  );
}
