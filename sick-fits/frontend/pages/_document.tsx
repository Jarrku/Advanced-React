import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  RenderPageResponse
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props extends RenderPageResponse {
  styleTags: React.ReactNode;
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: NextDocumentContext): Props {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
