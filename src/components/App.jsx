import React from 'react';
import { Switch } from 'react-router-dom';

import GlobalStyle from '../global.styles';
import AppContainer from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Switch>Routes</Switch>
      </AppContainer>
    </>
  );
};

export default App;
