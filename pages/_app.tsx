import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1 className={styles.title}>Getner Barn Summer Camp 2022</h1>
      <Navbar />
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/getnerbarn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Getner Barn {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
