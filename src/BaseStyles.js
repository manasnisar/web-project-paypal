import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @font-face {
    font-family: 'PayPal Sans Big';
    src: url('fonts/PayPalSansBig-Light.woff2') format('woff2'),
         url('fonts/PayPalSansBig-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'PayPal Sans Small';
    src: url('fonts/PayPalSansSmall-Regular.woff2') format('woff2'),
         url('fonts/PayPalSansSmall-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --blue-1: #0d3685;
    --blue-2: #0070ba;
    --blue-3: #003087;
    --blue-4: #009cde;

    --yellow-1: #fbb333;
    
    --neutral-1: #fff;
    --neutral-2: #2c2e2f;
    --neutral-3: #6c7378;
    --neutral-4: #f0f5ff;
    --neutral-5: #4a4a4a;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'PayPal Sans Small', sans-serif;
    text-decoration:none;
    outline: none;
    border: none;
    background: none;
  }

  body {
    font-size: 16px;
    overflow-x:hidden;
    -webkit-font-smoothing: antialiased;
    color: var(--neutral-2);
    background: var(--background);
  }

  #root {
    width: 100%;
    min-height: 100vh;
    margin: auto;
  }

  h1 {
    color: var(--neutral-5);
    font-family: 'PayPal Sans Big';
    font-size: 30px;
  }

  a, button {
    cursor: pointer;
  }
  
  a {
    color: var(--blue-2);

    :hover {
      text-decoration: underline;
    }
  }
`;
