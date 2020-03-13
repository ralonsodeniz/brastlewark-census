import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  /* grid-template-rows: repeat(auto-fill, 250px); */
  padding: 1rem 0;
  justify-content: center;
  grid-gap: 20px;
  width: 100%;
  height: min-content;
  max-height: 61vh;
  background: transparent;
  margin-top: 30px;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 0.5rem 0;
      grid-template-columns: repeat(auto-fill, 200px);
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      padding: 0.5rem 0;
      grid-template-columns: repeat(auto-fill, 125px);
    `
  )};

  /* overflow */
  ::-webkit-scrollbar {
    height: 12px;
    display: inline-block;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  ${mediaQueryHelper(
    'phone',
    css`
      margin-top: 20px;
      max-height: 50vh;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      margin-top: 20px;
      max-height: 43vh;
      grid-gap: 13px;
    `
  )};
`;
