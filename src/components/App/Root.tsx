import React, { FC } from 'react';
import { setConfig } from 'react-hot-loader';
import { Provider, RootStateOrAny } from 'react-redux';
import { Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import App from 'components/App/App';

setConfig({ trackTailUpdates: false });

type RootProps = {
  store: RootStateOrAny;
  history: any;
};

export const Root: FC<RootProps> = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

export default hot(Root);
