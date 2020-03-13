import React from 'react';
import PropTypes from 'prop-types';

import {
  UserFriendsContainer,
  UserFriendText,
  Friendsvg,
  UserFriendsTextContainer,
  UserFriendsTitle,
} from './UserFriends.styles';

const UserFriends = ({ friends }) => {
  return (
    <UserFriendsContainer>
      <UserFriendsTitle>Friends</UserFriendsTitle>
      <Friendsvg />
      <UserFriendsTextContainer>
        {friends.map((profession, professionIndex) => {
          if (friends.length - 1 !== professionIndex) {
            return <UserFriendText key={professionIndex}>{profession}, </UserFriendText>;
          }
          return <UserFriendText key={professionIndex}>{profession}</UserFriendText>;
        })}
      </UserFriendsTextContainer>
    </UserFriendsContainer>
  );
};

UserFriends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserFriends;
