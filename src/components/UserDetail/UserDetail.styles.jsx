import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

import Close from '../../../assets/close.svg';

export const UserDetailsContainer = styled.div`
  margin: 0 auto 0 auto;
  width: 900px;
  background-color: ${variables.darkGrey};
  border: 5px solid ${variables.primaryColor};
  border-radius: 5px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 600px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      border-width: 2.5px;
      width: 300px;
      padding: 0.75rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      width: 275px;
      padding: 0.55rem;
    `
  )};
`;

export const CloseSvg = styled(Close)`
  grid-area: close;
  width: 25px;
  margin-left: auto;
  margin-bottom: auto;
  cursor: pointer;

  ${mediaQueryHelper(
    'phone',
    css`
      width: 15px;
    `
  )};
`;
