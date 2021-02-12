import React, { FC } from 'react';
import { setConfig } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import App from 'components/App/App';
import client from 'client';
import { hot } from 'react-hot-loader/root';

setConfig({ trackTailUpdates: false });

type RootProps = {
  history: any;
};

export const Root: FC<RootProps> = ({ history }) => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>
);

export default hot(Root);
