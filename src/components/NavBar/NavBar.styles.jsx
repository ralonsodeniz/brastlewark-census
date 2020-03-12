import styled, { css } from 'styled-components';

import Logo from '../../../assets/logo.svg';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

export const NavBarContainer = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 70px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  background: ${variables.gradient};

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template-rows: 60px;
      width: 100%;
      margin-bottom: 20px;
    `
  )};
`;

export const LogoSvg = styled(Logo)`
  width: 50px;
  padding: 5px;

  ${mediaQueryHelper(
    'phone',
    css`
      width: 40px;
      padding: 5px;
    `
  )};
`;

export const NavBarTitle = styled.h4`
  font-weight: bold;
  font-size: ${variables.bigFontSize};
  color: ${variables.darkBlue};
`;
