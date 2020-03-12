import React from 'react';
import { Switch } from 'react-router-dom';

import NavBar from './NavBar/NavBar';

import GlobalStyle from '../global.styles';
import AppContainer from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppContainer>
        <Switch>Routes</Switch>
      </AppContainer>
    </>
  );
};

export default App;
