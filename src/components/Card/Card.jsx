import React from 'react';
import PropTypes from 'prop-types';

import {
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardDetailsMock,
  CadrDetailsTitle,
} from './Card.styles';

const Card = ({ name, imageUrl, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage alt="user" src={imageUrl} />
      <CardDetailsMock>
        <CardDetailsContainer>
          <CadrDetailsTitle>{name}</CadrDetailsTitle>
        </CardDetailsContainer>
      </CardDetailsMock>
    </CardContainer>
  );
};

Card.defaultProps = {
  onClick: () => {},
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Card;
