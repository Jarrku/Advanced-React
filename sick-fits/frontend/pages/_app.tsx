import App, { Container, NextAppContext } from 'next/app';
import { DefaultQuery } from 'next/router';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';

import withData from '../lib/withData';

interface Props {
  apollo: ApolloClient<{}>;
}

interface PageProps {
  query?: DefaultQuery;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps: PageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
