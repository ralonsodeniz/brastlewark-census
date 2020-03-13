import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { openModal } from '../../redux/actions/modalActions';

import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import Spinner from '../Spinner/Spinner';

import { CardListContainer, CardListSpinnerContainer } from './CardList.style';

const CardList = ({ items, loading }) => {
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

  const CardsMarkUp = !loading
    ? items.map(item => {
        const { name, thumbnail, id } = item;
        return (
          <Card key={id} imageUrl={thumbnail} name={name} onClick={() => handleCardClick(item)} />
        );
      })
    : Array.from({ length: 4 }).map((card, cardIndex) => <CardSkeleton key={cardIndex} />);

  return (
    <CardListContainer>
      {loading && (
        <CardListSpinnerContainer>
          <Spinner />
        </CardListSpinnerContainer>
      )}
      {CardsMarkUp}
    </CardListContainer>
  );
};

CardList.defaultProps = {
  loading: false,
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};

export default CardList;
