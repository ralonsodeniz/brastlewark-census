import React, { lazy, Suspense, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeModal } from '../../redux/actions/modalActions';
import { selectModalType, selectModalProps } from '../../redux/selectors/modalSelectors';

import OnClickOutSide from '../OnClickOutside/OnClickOutside';
import Spinner from '../Spinner/Spinner';

import InnerModalContainer from './InnerModal.styles';

const lazyUserDetail = lazy(() => import('../UserDetail/UserDetail'));
const lazyMobileFullScreenAndLock = lazy(() =>
  import('../MobileFullScreenAndLock/MobileFullScreenAndLock')
);

const MODAL_OPTIONS = {
  USER_DETAIL: lazyUserDetail,
  MOBILE_FULLSCREEN_LOCK: lazyMobileFullScreenAndLock,
};

const getModalData = createStructuredSelector({
  modalType: selectModalType,
  modalProps: selectModalProps,
});

const InnerModal = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector(getModalData, shallowEqual);
  const closeModalOnClickOutside = useCallback(() => dispatch(closeModal()), [dispatch]);
  const SpecificModal = MODAL_OPTIONS[modalType];

  return (
    <InnerModalContainer>
      <OnClickOutSide
        enabled={modalType !== 'MOBILE_FULLSCREEN_LOCK'}
        action={closeModalOnClickOutside}
      >
        <Suspense fallback={<Spinner />}>
          <SpecificModal {...modalProps} />
        </Suspense>
      </OnClickOutSide>
    </InnerModalContainer>
  );
};

export default InnerModal;
