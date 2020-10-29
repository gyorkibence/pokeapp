import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES from 'routes';
import './App.scss';

const App: FC = () => (
  <Switch>
    <Route exact path="/" component={ROUTES.MainPage} />
    <Route path="/:name" component={ROUTES.PokePage} />
  </Switch>
);

export default App;
