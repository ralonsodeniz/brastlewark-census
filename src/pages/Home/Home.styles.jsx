import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

import Banner from '../../../assets/banner.svg';

export const HeaderContainer = styled.header`
  margin: 0 auto 0 auto;
  width: 600px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / auto;
  grid-column-gap: 30px;
  grid-template-areas:
    'title title'
    'banner description'
    'button button';

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / auto;
      grid-template-areas:
        'title'
        'banner'
        'description'
        'button';
      width: 300px;
    `
  )};
`;

export const HeaderTitle = styled.h2`
  grid-area: title;
  ${variables.titleStyles}
  margin-top: 10px;
  ${variables.gradientTextStyle}
`;

export const BannerSvg = styled(Banner)`
  grid-area: banner;
  width: 150px;
  padding: 5px;

  ${mediaQueryHelper(
    'phone',
    css`
      width: 140px;
      padding: 5px;
    `
  )};
`;

export const HeaderDescription = styled.p`
  grid-area: description;
  line-height: 1.5rem;
`;

export const HeaderLink = styled(Link)`
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

  ${mediaQueryHelper(
    'phone',
    css`
      background-image: none;
      border: 2px solid ${variables.secondaryColor};
      -webkit-text-fill-color: ${variables.secondaryColor};
    `
  )};

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
