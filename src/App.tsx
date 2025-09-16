import React from 'react';
import { TimeCircleBlock } from './components/TimeCircleBlock/TimeCircleBlock';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    background: #F5F5F5;
    line-height: 1.6;
    color: #000000;
  }

  #root {
    min-height: 100vh;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TimeCircleBlock />
    </>
  );
};

export default App;