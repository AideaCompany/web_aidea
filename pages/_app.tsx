import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "../styles/index.scss";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
