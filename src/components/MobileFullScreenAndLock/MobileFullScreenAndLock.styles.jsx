import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

export const MobileFullScreenAndLockContainer = styled.div`
  margin: 0 auto 0 auto;
  width: max-content;
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
      max-width: 600px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      border-width: 2.5px;
      max-width: 300px;
      padding: 0.75rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      max-width: 275px;
      padding: 0.55rem;
    `
  )};
`;

export const AcceptButton = styled.a`
  cursor: pointer;
  width: max-content;
  grid-area: button;
  display: inline-block;
  position: relative;
  padding: 0.8rem ${variables.defaultFontSize};
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  background-image: linear-gradient(
    135deg,
    ${variables.primaryColor} 0%,
    ${variables.secondaryColor} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid transparent;
  border-image: linear-gradient(
    135deg,
    ${variables.primaryColor} 0%,
    ${variables.secondaryColor} 100%
  );
  border-image-slice: 1;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
    background-image: linear-gradient(
      135deg,
      ${variables.primaryColor} 0%,
      ${variables.secondaryColor} 100%
    );

    ${mediaQueryHelper(
      'phone',
      css`
        background-image: none;
      `
    )};
  }

  &:hover {
    -webkit-text-fill-color: ${variables.whiteColor};
    text-decoration: none;

    ${mediaQueryHelper(
      'phone',
      css`
        -webkit-text-fill-color: ${variables.secondaryColor};
      `
    )};

    &::after {
      width: 100%;
    }
  }
`;
