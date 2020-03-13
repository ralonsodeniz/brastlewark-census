import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

const shrinkLabelStyles = css`
  top: -0.5rem;
  font-size: ${variables.smallFontSize};
  background-image: none;
  -webkit-text-fill-color: ${variables.darkBlue};

  ${mediaQueryHelper(
    'phone',
    css`
      top: -0.4rem;
    `
  )};
`;

export const SearchBoxContainer = styled.div`
  padding: 0.5rem;
  position: relative;
  align-self: center;
`;

export const SearchBoxInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${variables.darkBlue};
  display: block;
  /* background: none; */
  border-radius: 5px;
  background-color: ${variables.darkBlue};
  font-size: ${variables.defaultFontSize};
  color: ${variables.whiteColor};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  ${mediaQueryHelper(
    'phone',
    css`
      padding: 0.35rem;
    `
  )};
`;

export const SearchBoxLabel = styled.label`
  font-size: ${variables.defaultFontSize};
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 17.5px;
  transition: 300ms ease all;
  z-index: 9;
  ${variables.gradientTextStyle}

  ${mediaQueryHelper(
    'phone',
    css`
      top: 15px;
    `
  )};

  ${({ shrink }) => (shrink ? shrinkLabelStyles : '')};
`;
