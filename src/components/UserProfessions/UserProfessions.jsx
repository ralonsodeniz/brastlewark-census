import React from 'react';
import PropTypes from 'prop-types';

import {
  UserProfessionsContainer,
  UserProfessionText,
  ProfessionSvg,
  UserProfessionsTextContainer,
  UserProfessionsTitle,
} from './UserProfessions.styles';

const UserProfessions = ({ professions }) => {
  return (
    <UserProfessionsContainer>
      <UserProfessionsTitle>Professions</UserProfessionsTitle>
      <ProfessionSvg />
      <UserProfessionsTextContainer>
        {professions.map((profession, professionIndex) => {
          if (professions.length - 1 !== professionIndex) {
            return <UserProfessionText key={professionIndex}>{profession}, </UserProfessionText>;
          }
          return <UserProfessionText key={professionIndex}>{profession}</UserProfessionText>;
        })}
      </UserProfessionsTextContainer>
    </UserProfessionsContainer>
  );
};

UserProfessions.propTypes = {
  professions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserProfessions;
