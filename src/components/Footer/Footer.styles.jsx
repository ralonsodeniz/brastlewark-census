import styled, { css } from 'styled-components';
import { darken } from 'polished';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

export const FooterContainer = styled.footer`
  background-color: ${variables.darkGrey};
  margin-top: auto;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueryHelper(
    'phone-xs',
    css`
      height: 6vh;
    `
  )}
`;

export const FooterText = styled.span`
  color: ${darken(0.5, '#fff')};
  font-size: ${variables.defaultFontSize};

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${variables.smallFontSize};
    `
  )}
`;

export const FooterLink = styled.a`
  color: ${darken(0.5, '#fff')};
  font-size: ${variables.defaultFontSize};
  transition: all 0.4s;
  display: inline-block;
  background-color: ${variables.darkGrey};

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${variables.smallFontSize};
    `
  )}

  &:hover,
  &:active {
    color: ${variables.primaryColor};
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  }
`;
