import 'styles/globals.css';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
  ApolloProvider,
  gql,
} from '@apollo/client';
import Layout from 'components/layout';

const httpLink = new HttpLink({ uri: '/api/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  if (typeof window !== 'undefined') {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `Token ${localStorage.getItem('token')}` || null,
      },
    }));
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
