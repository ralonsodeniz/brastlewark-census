import { createGlobalStyle } from 'styled-components';

import * as variables from './style/variables';

export default createGlobalStyle`
html {
    scroll-behavior: smooth;
    height: 100%;
    width: 100%;
}
    
body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${variables.darkBlue};
    color: ${variables.whiteColor};
    margin: 0;
    padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1 {
  font-weight: 700;
}

p,
a {
  font-family: 'Montserrat', sans-serif;
  font-size: ${variables.defaultFontSize};
  text-align: justify;
}

a,
a:link,
a:hover,
a:visited,
a:active {
  text-decoration: none;
}

a:hover {
  transition: all 0.3s ease-in-out;
}

#root{
  height: 100vh;
  width: 100vw;
  display:flex;
  flex-direction:column;
}

#modal{
  position: relative;
  z-index: 999;
}
`;
