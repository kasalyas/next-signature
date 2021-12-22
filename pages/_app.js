import SignatureState from "../components/context";
import "../main.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SignatureState>
      <Component {...pageProps} />
    </SignatureState>
  );
}
