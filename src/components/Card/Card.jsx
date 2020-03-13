import React from 'react';
import PropTypes from 'prop-types';

import NoImg from '../../../assets/no-image.webp';

import {
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardDetailsMock,
  CardDetailsTitle,
  CardImagePlaceholder,
} from './Card.styles';

const Card = ({ name, imageUrl, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage
        alt="user"
        height={250}
        src={imageUrl}
        effect="blur"
        placeholder={<CardImagePlaceholder alt="placeholder" src={NoImg} />}
      />
      <CardDetailsMock>
        <CardDetailsContainer>
          <CardDetailsTitle>{name}</CardDetailsTitle>
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
