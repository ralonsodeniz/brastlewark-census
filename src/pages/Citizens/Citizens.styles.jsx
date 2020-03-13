import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

export const CitizensContainer = styled.div`
  margin: 0 auto 0 auto;
  width: 1200px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / auto;
  grid-template-areas:
    'title'
    'searchboxes'
    'citizens';

  ${mediaQueryHelper(
    'tab-xl',
    css`
      width: 900px;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 700px;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      width: 350px;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      width: 280px;
    `
  )};
`;

export const CitizensTitle = styled.h2`
  grid-area: title;
  ${variables.titleStyles}
  margin-top: 10px;
  ${variables.gradientTextStyle}
`;

export const SearchBoxesContainer = styled.div`
  grid-area: searchboxes;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / auto;
  grid-template-areas: 'name profession';
  background: ${variables.gradient};
  border-radius: 5px;
  padding: 0.75rem;

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / auto;
      justify-items: center;
      grid-template-areas:
        'name'
        'profession';
      padding: 0.5rem;
    `
  )};
`;

export const CitizensListContainer = styled.div`
  grid-area: citizens;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const NameSearchContainer = styled.div`
  grid-area: name;
`;

export const ProffesionSearchContainer = styled.div`
  grid-area: profession;
`;
