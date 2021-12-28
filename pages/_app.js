import Head from "next/head";
import SignatureState from "../components/context";
import "../main.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SignatureState>
      <Head>
        <title>Signature generator for Kin and Carta</title>
      </Head>
      <Component {...pageProps} />
    </SignatureState>
  );
}
