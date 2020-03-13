import React from 'react';
import PropTypes from 'prop-types';

import {
  UserDataContainer,
  UserWeight,
  UserName,
  UserHeight,
  UserHairColor,
  UserAge,
  AvatarImage,
  UserDataTitle,
  UserDataText,
} from './userData.styles';

const userData = ({ imageUrl, name, age, hairColor, weight, height }) => {
  return (
    <UserDataContainer>
      <AvatarImage alt="user" src={imageUrl} />
      <UserName>{name}</UserName>
      <UserAge>
        <UserDataTitle>Age</UserDataTitle>
        <UserDataText>{age} years</UserDataText>
      </UserAge>
      <UserHairColor>
        <UserDataTitle>Hair color</UserDataTitle>
        <UserDataText>{hairColor}</UserDataText>
      </UserHairColor>
      <UserWeight>
        <UserDataTitle>Weight</UserDataTitle>
        <UserDataText>{Math.round(weight)} Kg</UserDataText>
      </UserWeight>
      <UserHeight>
        <UserDataTitle>Height</UserDataTitle>
        <UserDataText>{Math.round(height)} cm</UserDataText>
      </UserHeight>
    </UserDataContainer>
  );
};

userData.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hairColor: PropTypes.string.isRequired,
};

export default userData;
