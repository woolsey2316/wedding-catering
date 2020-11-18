import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

/*
inject the css to html to load it on the first SSR html paint without any delay.
*/

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html className="no-fouc">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
        <footer>
          {/* FOUC fix for chrome */}
          <script> </script>
        </footer>
      </Html>
    )
  }
}

export default MyDocument