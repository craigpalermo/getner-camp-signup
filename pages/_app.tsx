import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);

  return (
    <div className="container">
      <div className="mx-auto">
        <h1 className="text-center">Getner Barn Summer Camp 2022</h1>
        <Navbar activeRoute={router.route} />
        <Component {...pageProps} />
      </div>
      <footer className="flex justify-center">
        <a
          className="text-sm text-gray-400"
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
