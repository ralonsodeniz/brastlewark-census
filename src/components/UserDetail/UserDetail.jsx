import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from '../../redux/actions/modalActions';

import UserData from '../userData/userData';
import UserProfessions from '../UserProfessions/UserProfessions';
import UserFriends from '../UserFriends/UserFriends';

import { UserDetailsContainer, CloseSvg } from './UserDetail.styles';

const UserDetails = ({ name, thumbnail, age, weight, height, hairColor, professions, friends }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <UserDetailsContainer>
      <CloseSvg onClick={handleClose} />
      <UserData
        imageUrl={thumbnail}
        name={name}
        age={age}
        weight={weight}
        height={height}
        hairColor={hairColor}
      />
      <UserProfessions professions={professions} />
      <UserFriends friends={friends} />
    </UserDetailsContainer>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hairColor: PropTypes.string.isRequired,
  professions: PropTypes.arrayOf(PropTypes.string).isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserDetails;
