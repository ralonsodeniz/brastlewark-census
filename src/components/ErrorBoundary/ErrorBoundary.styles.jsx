import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

import Orc from '../../../assets/orc.svg';

export const ErrorContainer = styled.header`
  margin: 0 auto 0 auto;
  width: 600px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / auto;
  grid-row-gap: 30px;
  grid-template-areas:
    'title '
    'svg '
    'description ';

  ${mediaQueryHelper(
    'phone',
    css`
      width: 300px;
    `
  )};
`;

export const ErrorTitle = styled.h2`
  grid-area: title;
  ${variables.titleStyles}
  margin-top: 10px;
  ${variables.gradientTextStyle}
`;

export const ErrorSvg = styled(Orc)`
  grid-area: svg;
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

export const ErrorDescription = styled.p`
  grid-area: description;
  line-height: 1.5rem;
`;
