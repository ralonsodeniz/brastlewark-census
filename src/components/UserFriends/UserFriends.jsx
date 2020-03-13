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
        {friends.map((friend, friendIndex) => {
          if (friends.length - 1 !== friendIndex) {
            return <UserFriendText key={friendIndex}>{friend}, </UserFriendText>;
          }
          return <UserFriendText key={friendIndex}>{friend}</UserFriendText>;
        })}
      </UserFriendsTextContainer>
    </UserFriendsContainer>
  );
};

UserFriends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserFriends;
