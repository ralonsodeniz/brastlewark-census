import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { openModal } from '../../redux/actions/modalActions';

import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

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

  const CardsMarkUp =
    // !dataLoading && items.length ? (
    items.length
      ? items.map(item => {
          const { name, thumbnail, id } = item;
          return (
            <Card key={id} imageUrl={thumbnail} name={name} onClick={() => handleCardClick(item)} />
          );
        })
      : Array.from({ length: 13 }).map((card, cardIndex) => <CardSkeleton key={cardIndex} />);

  return <CardListContainer>{CardsMarkUp}</CardListContainer>;
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
