import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { openModal } from '../../redux/actions/modalActions';

import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import Spinner from '../Spinner/Spinner';

import { CardListContainer, CardListSpinnerContainer } from './CardList.style';

const CardList = ({ items, loading }) => {
  const dispatch = useDispatch();

  const [height, setHeight] = useState(null);

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vw <= 600) {
      setHeight(125);
    } else if (vw <= 900) {
      setHeight(200);
    } else setHeight(250);
  }, [setHeight]);

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
    !loading && height !== null
      ? items.map(item => {
          const { name, thumbnail, id } = item;
          return (
            <Card
              key={id}
              imageUrl={thumbnail}
              name={name}
              onClick={() => handleCardClick(item)}
              height={height}
            />
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
