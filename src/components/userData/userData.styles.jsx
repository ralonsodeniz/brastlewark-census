import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

const dataContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueryHelper(
    'phone',
    css`
      align-items: center;
      margin-bottom: 0.5rem;
    `
  )}

  ${mediaQueryHelper(
    'phone-xs',
    css`
      font-size: ${variables.smallFontSize};
    `
  )};
`;

export const UserDataContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template: auto / 250px auto auto;
  grid-template-areas:
    'avatar name name'
    'avatar age weight'
    'avatar hairColor height';
  margin-bottom: 10px;

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / auto;
      grid-template-areas:
        'avatar avatar'
        'name name'
        'age hairColor'
        'weight height';
    `
  )};
`;

export const AvatarImage = styled.img`
  grid-area: avatar;
  width: 200px;
  height: 200px;
  object-fit: cover;
  max-width: 100%;
  border-radius: 50%;

  ${mediaQueryHelper(
    'phone',
    css`
      width: 100px;
      height: 100px;
    `
  )};
`;

export const UserName = styled.h3`
  grid-area: name;
  ${variables.titleStyles}
  ${variables.gradientTextStyle}
  margin-bottom: 0px;
  margin-top: 10px;
  text-align: center;

  ${mediaQueryHelper(
    'tab-port',
    css`
      font-size: ${variables.midFontSize};
    `
  )};
`;

export const UserAge = styled.p`
  grid-area: age;
  ${dataContainerStyles}
`;

export const UserHairColor = styled.p`
  grid-area: hairColor;
  ${dataContainerStyles}
`;

export const UserWeight = styled.p`
  grid-area: weight;
  ${dataContainerStyles}
`;

export const UserHeight = styled.p`
  grid-area: height;
  ${dataContainerStyles}
`;

export const UserDataTitle = styled.span`
  margin-bottom: 1rem;
  font-weight: bold;
  ${variables.gradientTextStyle}
`;

export const UserDataText = styled.span`
  cursor: pointer;
  white-space: pre;
`;
