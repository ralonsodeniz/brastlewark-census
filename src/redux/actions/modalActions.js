import MODAL from '../types/modalTypes';

export const openModal = modalData => ({
  type: MODAL.OPEN_MODAL,
  payload: modalData,
});

export const closeModal = () => ({
  type: MODAL.CLOSE_MODAL,
});
