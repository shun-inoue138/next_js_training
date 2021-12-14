import '../styles/globals.css';
import useCounter from 'src/hooks/useCounter';
function MyApp({ Component, pageProps }) {
  const counter = useCounter();

  return <Component {...pageProps} {...counter} />;
}

export default MyApp;
