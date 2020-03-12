import { css } from 'styled-components';
// MEDIA QUERY MANAGER
/*

0 - 600px:          Phone
600px - 900px       Table Portrait
900px - 1200px      Table Landscape
[1200px - 1800px]   Desktop Normal Styles
1800px +            Big Desktop

1em = 16px

*/

export default (breakpoint, breakpointStyle) => {
  switch (breakpoint) {
    case 'phone-xs':
      return css`
        @media screen and (max-width: 22.5em) {
          /*0 - 360px*/
          ${breakpointStyle}
        }
      `;
    case 'phone':
      return css`
        @media screen and (max-width: 37.5em) {
          /*0 - 600px*/
          ${breakpointStyle}
        }
      `;
    case 'tab-port':
      return css`
        @media screen and (max-width: 56.25em) {
          /*900px*/
          ${breakpointStyle}
        }
      `;
    case 'tab-xl':
      return css`
        @media screen and (max-width: 63em) {
          /*1000px*/
          ${breakpointStyle}
        }
      `;
    case 'tab-land':
      return css`
        @media screen and (max-width: 75em) {
          /*1200px*/
          ${breakpointStyle}
        }
      `;
    case 'big-desktop':
      return css`
        @media screen and (min-width: 112.5em) {
          /*1800px*/
          ${breakpointStyle}
        }
      `;

    default:
      return '';
  }
};
