import React from 'react'
import AppStore from './appStore';

export const storesContext = React.createContext({
  appStore: AppStore,
});
