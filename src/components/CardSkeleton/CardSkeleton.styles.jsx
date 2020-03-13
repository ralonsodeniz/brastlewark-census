import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';
import * as variables from '../../style/variables';

export const CardSkeletonContainer = styled.div`
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
`;

export const CardSkeletonImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  height: 250px;
  border-radius: 5px;

  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 200px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      height: 125px;
    `
  )};
`;

export const CardSkeletonDetailsMock = styled.div`
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

export const CardSkeletonDetailsContainer = styled.div`
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

export const CardSkeletonDetailsTitle = styled.div`
  width: 180px;
  margin-top: 1rem;
  border-radius: 5px;
  height: ${variables.midFontSize};
  background: linear-gradient(to right, ${variables.darkGrey}, ${variables.whiteColor});
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;

  ${mediaQueryHelper(
    'tab-port',
    css`
      margin-top: 0.75rem;
      width: 150px;
      height: ${variables.defaultFontSize};
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      margin-top: 0.4rem;
      width: 90px;
      height: ${variables.smallFontSize};
    `
  )};

  @keyframes gradient {
    0% {
      background-position: 100% 50%;
    }

    50% {
      background-position: 0% 50%;
    }

    100% {
      background-position: 100% 50%;
    }
  }
`;
