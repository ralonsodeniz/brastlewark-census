import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Footer from './Footer/Footer';

import HomePage from '../pages/Home/Home';

import GlobalStyle from '../global.styles';
import AppContainer from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppContainer>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </ErrorBoundary>
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
