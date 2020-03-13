/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeModal } from '../../redux/actions/modalActions';
import { selectModalType, selectModalProps } from '../../redux/selectors/modalSelectors';

import OnClickOutSide from '../Helpers/OnClickOutside';

import InnerModalContainer from './InnerModal.styles';

const lazyUserDetail = lazy(() => import('../UserDetail/UserDetail'));

const MODAL_OPTIONS = {
  USER_DETAIL: lazyUserDetail,
};

const SKELETON_OPTIONS = {
  USER_DETAIL: lazyUserDetail,
};

const getModalData = createStructuredSelector({
  modalType: selectModalType,
  modalProps: selectModalProps,
});

const InnerModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(getModalData, shallowEqual);
  const closeModalOnClickOutside = useCallback(() => dispatch(closeModal()), [dispatch]);
  const SpecificModal = MODAL_OPTIONS[modalData.modalType];
  const SpecificSkeleton = SKELETON_OPTIONS[modalData.modalType];

  return (
    <InnerModalContainer>
      <OnClickOutSide enabled action={closeModalOnClickOutside}>
        <Suspense fallback={<SpecificSkeleton />}>
          <SpecificModal {...modalData.modalProps} />
        </Suspense>
      </OnClickOutSide>
    </InnerModalContainer>
  );
};

export default InnerModal;
