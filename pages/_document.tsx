import { HtmlProps } from 'next/dist/shared/lib/html-context.shared-runtime'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type StyleTagType = {
  styleTags?: React.JSX.Element[]
}

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    function handleCollectStyles(App) {
      return (props: React.JSX.IntrinsicAttributes) => sheet.collectStyles(<App {...props} />)
    }

    const page = await renderPage(App => handleCollectStyles(App))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {(this.props as HtmlProps & StyleTagType).styleTags}
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
