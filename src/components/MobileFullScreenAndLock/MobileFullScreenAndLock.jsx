import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../redux/actions/modalActions';
import setFullScreenAndLock from '../../helpers/setFullScreenAndLock';

import { AcceptButton, MobileFullScreenAndLockContainer } from './MobileFullScreenAndLock.styles';

const MobileFullScreenAndLock = () => {
  const dispatch = useDispatch();

  const handleRedirectToCitizens = useCallback(async () => {
    await setFullScreenAndLock();
    dispatch(closeModal());
  }, [setFullScreenAndLock, dispatch]);

  return (
    <MobileFullScreenAndLockContainer>
      <p>This app is optimized and developed to be used in fullscreen portrait</p>
      <AcceptButton onClick={handleRedirectToCitizens}>Lets go!</AcceptButton>
    </MobileFullScreenAndLockContainer>
  );
};

export default MobileFullScreenAndLock;
