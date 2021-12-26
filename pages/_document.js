import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Signature generator for Kin and Carta</title>
          <meta
            name="description"
            content="App to help generate K+C signatures"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Josefin+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
