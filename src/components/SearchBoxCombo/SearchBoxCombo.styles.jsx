import styled, { css } from 'styled-components';

import * as variables from '../../style/variables';
import mediaQueryHelper from '../../style/media-queries';

export const SearchBoxComboContainer = styled.div`
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

export const NameSearchContainer = styled.div`
  grid-area: name;
`;

export const ProffesionSearchContainer = styled.div`
  grid-area: profession;
`;
