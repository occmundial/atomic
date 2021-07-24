import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentContext
} from 'next/document'
import { SheetsRegistry, JssProvider } from 'react-jss'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          (
            <JssProvider registry={registry}>
              <App {...props} />
            </JssProvider>
          )
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      )
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {this.props.styles}
          <link
            rel="icon"
            type="image/x-icon"
            href="https://cdn-h4.occ.com.mx/images/common/favicon.png"
          />
          {/* This is the font used by all components: HK Grotesk */}
          <link
            rel="stylesheet"
            href="https://cdn-h4.occ.com.mx/fonts/stylesheet.css"
          />
          {/* This is the stylesheet to use the icons */}
          <link rel="preconnect" href="https://cdn-h4.occ.com.mx" />
          <link
            href="https://cdn-h4.occ.com.mx/icons/styles.css"
            rel="stylesheet"
          />
          {/* This font is just used for the documentation site, you can remove it if you don't need it */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
