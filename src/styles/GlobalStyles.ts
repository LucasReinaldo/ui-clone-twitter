import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #000;
    --color-secondary: #15181c;
    --color-search: #202327;
    --color-white: #d9d9d9;
    --color-gray: #6c747a;
    --color-outline: #2f3336;
    --color-retweet: #00c06b;
    --color-like: #e8265e;
    --color-twitter: #33a1f2;
    --color-twitter-dark-hover: #011017;
    --color-twitter-light-hover: #2c8ed6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--color-white);
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--color-primary);
  }
`;