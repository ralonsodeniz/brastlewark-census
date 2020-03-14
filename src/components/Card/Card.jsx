import React from 'react';
import PropTypes from 'prop-types';

import NoImg from '../../../assets/no-image.webp';

import {
  CardContainer,
  CardDetailsContainer,
  CardImage,
  CardDetailsMock,
  CardDetailsTitle,
} from './Card.styles';

const Card = ({ name, imageUrl, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage
        wrapperClassName="placeholder"
        alt="user"
        src={imageUrl}
        placeholderSrc={NoImg}
        height="250px"
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
