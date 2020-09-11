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
    --primary: #0070ba;
    --secondary: #0d3685;
    --link: #00a8ea;
    --light-text-1: #fff;
    --dark-text-1: #2c2e2f;
    --dark-text-2: #4a4a4a;
    --dark-text-3:#000;
    --signup-button: #fcbb32;
    --business-button: #fff;
    --new-badge: #fbb333;
    --background-1: #fff;
    --background-2: #f0f5ff;
    --background-3: #00a8ea;
  }


  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: 'PayPal Sans Small', sans-serif;
    background: none;
  }

  body {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    color: var(--dark-text-1);
    background: var(--background);
  }

  #root {
    width: 100%;
    min-height: 100vh;
    margin: auto;
  }

  h1 {
    color: var(--dark-text-2);
    font-family: 'PayPal Sans Big';
    font-size: 30px;
  }

  a, button{
    cursor: pointer;
  }
`;
