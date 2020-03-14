import styled, { css } from 'styled-components';
// import { LazyImage } from 'react-lazy-images';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import mediaQueryHelper from '../../style/media-queries';
import * as variables from '../../style/variables';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  width: 250px;
  height: 250px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 200px;
      height: 200px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      width: 125px;
      height: 125px;
    `
  )}

  & .placeholder {
    border-radius: 5px;
  }
`;

export const CardImage = styled(LazyLoadImage)`
  object-fit: cover;
  object-position: 50% 50%;
  height: 250px;
  width: 250px;
  border-radius: 5px;
  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 200px;
      width: 200px;
    `
  )};
  ${mediaQueryHelper(
    'phone',
    css`
      height: 125px;
      width: 125px;
    `
  )};
`;

export const CardDetailsMock = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;

  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 30px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      height: 20px;
    `
  )};
`;

export const CardDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-image: -webkit-linear-gradient(
    135deg,
    ${variables.primaryColor},
    ${variables.secondaryColor}
  );
  background-image: linear-gradient(135deg, ${variables.primaryColor}, ${variables.secondaryColor});
  -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 100%, 0 100%, 0 25%);
  clip-path: polygon(50% 0, 100% 25%, 100% 100%, 0 100%, 0 25%);
  position: absolute;
  width: 100%;
  border-radius: 5px;
  height: 80px;
  bottom: 0px;
  text-align: center;
  color: ${variables.darkBlue};

  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 60px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      height: 40px;
    `
  )};
`;

export const CardDetailsTitle = styled.h3`
  padding-top: 20px;
  font-weight: bold;
  font-size: ${variables.midFontSize};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding-top: 15px;
      font-size: ${variables.defaultFontSize};
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      padding-top: 10px;
      font-size: ${variables.smallFontSize};
    `
  )};
`;
