/* eslint-disable no-restricted-globals */
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectShowModal } from '../redux/selectors/modalSelectors';
import { fetchApiStart } from '../redux/actions/dataActions';
import { openModal } from '../redux/actions/modalActions';
import isMobile from '../helpers/isMobile';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiStart(process.env.API_URL));
  }, [dispatch, process.env.API_URL]);

  const checkIfFullScreen = () => {
    if (isMobile() && !document.fullscreenElement)
      dispatch(
        openModal({
          modalType: 'MOBILE_FULLSCREEN_LOCK',
        })
      );
  };

  useEffect(() => {
    checkIfFullScreen();
    document.addEventListener('fullscreenchange', checkIfFullScreen);
    return () => {
      document.removeEventListener('fullscreenchange', checkIfFullScreen);
    };
  }, []);

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
