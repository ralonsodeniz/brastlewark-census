import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { openModal } from '../../redux/actions/modalActions';

import Card from '../Card/Card';

import CardListContainer from './CardList.style';

const CardList = ({ items }) => {
  const dispatch = useDispatch();

  const handleCardClick = useCallback(
    item => {
      dispatch(
        openModal({
          modalType: 'USER_DETAIL',
          modalProps: item,
        })
      );
    },
    [dispatch]
  );

  return (
    <CardListContainer>
      {items.map(item => {
        const { name, thumbnail, id } = item;
        return (
          <Card key={id} imageUrl={thumbnail} name={name} onClick={() => handleCardClick(item)} />
        );
      })}
    </CardListContainer>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
