import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  body {
    margin: 0;
    scroll: smooth;
    background: white;
    font-family: 'Muli', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
