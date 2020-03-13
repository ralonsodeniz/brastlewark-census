import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

import Friends from '../../../assets/gnome.svg';

const friendsContainerStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${mediaQueryHelper(
    'phone',
    css`
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: ${variables.smallFontSize};
    `
  )}
`;

export const UserFriendsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / 100px 600px;
  grid-column-gap: 1rem;

  grid-template-areas:
    'svg title'
    'svg friends';

  ${mediaQueryHelper(
    'tab-port',
    css`
      grid-template: auto / 100px 40vw;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / 50vw;
      grid-template-areas:
        'svg'
        'title'
        'friends';
    `
  )};
`;

export const UserFriendsTitle = styled.h4`
  grid-area: title;
  font-size: ${variables.midFontSize};
  ${variables.gradientTextStyle}
  margin-bottom: 0px;
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase;

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${variables.defaultFontSize};
    `
  )};
`;

export const Friendsvg = styled(Friends)`
  grid-area: svg;
  width: 100px;
  padding: 5px;
  align-self: center;

  ${mediaQueryHelper(
    'phone',
    css`
      width: 50px;
      padding: 5px;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      display: none;
    `
  )};
`;

export const UserFriendsTextContainer = styled.p`
  grid-area: friends;
  ${friendsContainerStyles}
`;

export const UserFriendText = styled.span`
  cursor: pointer;
  white-space: pre;
  margin-bottom: 0.5rem;
`;
