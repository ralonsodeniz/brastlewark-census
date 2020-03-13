import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShowModal } from '../redux/selectors/modalSelectors';

import NavBar from './NavBar/NavBar';
import InnerModal from './Modal/InnerModal';
import Modal from './Modal/Modal';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Footer from './Footer/Footer';
import Spinner from './Spinner/Spinner';

import HomePage from '../pages/Home/Home';

import GlobalStyle from '../global.styles';
import AppContainer from './App.styles';

const Citizens = lazy(() => import('../pages/Citizens/Citizens'));

const selectAppData = createStructuredSelector({
  showModal: selectShowModal,
});

const App = () => {
  const appData = useSelector(selectAppData, shallowEqual);
  const { showModal } = appData;

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppContainer>
        <ErrorBoundary>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/citizens" component={Citizens} />
            </Suspense>
          </Switch>
          {showModal && (
            <Modal>
              <InnerModal />
            </Modal>
          )}
        </ErrorBoundary>
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
