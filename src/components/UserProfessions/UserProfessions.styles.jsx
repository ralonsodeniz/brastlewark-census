import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

import Professions from '../../../assets/resume.svg';

const professionsContainerStyles = css`
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

export const UserProfessionsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / 600px 100px;
  grid-column-gap: 1rem;
  grid-template-areas:
    'title svg'
    'professions svg';

  ${mediaQueryHelper(
    'tab-port',
    css`
      grid-template: auto / 40vw 100px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / 50vw;
      grid-template-areas:
        'svg'
        'title'
        'professions';
    `
  )};
`;

export const UserProfessionsTitle = styled.h4`
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

export const ProfessionSvg = styled(Professions)`
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

export const UserProfessionsTextContainer = styled.p`
  grid-area: professions;
  ${professionsContainerStyles}
`;

export const UserProfessionText = styled.span`
  cursor: pointer;
  white-space: pre;
  margin-bottom: 0.5rem;
`;
