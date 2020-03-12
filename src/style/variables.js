import { css } from 'styled-components';

import mediaQueryHelper from './media-queries';

// colors
export const primaryColor = '#38ef7d';
export const secondaryColor = '#11998e';
export const whiteColor = '#fff';
export const darkGrey = '#333333';
export const darkBlue = '#272341';
export const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;

// font sized
export const defaultFontSize = '1rem';
export const bigFontSize = '1.5rem;';
export const midFontSize = '1.25rem';
export const smallFontSize = '0.75rem';
export const xlFontSize = '2.25rem';

// typography
export const titleStyles = css`
  margin: 0px;
  margin-bottom: 2rem;
  font-size: ${xlFontSize};
  font-weight: bold;
  text-transform: uppercase;

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${defaultFontSize};
    `
  )};
`;

export const gradientTextStyle = css`
  background-image: linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${mediaQueryHelper(
    'phone',
    css`
      background-image: none;
      -webkit-text-fill-color: ${secondaryColor};
    `
  )};
`;
