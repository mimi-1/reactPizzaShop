import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

   h1,h2,h3 {
     font-family: 'Freckle Face', cursive;
  }
`;

function App() {
  return (
    <>
      <h1>Welcome to Mimi's the pizza shop!</h1>
      <div>Hello PIzza SHop</div>
      <GlobalStyle />
    </>
  );
}

export default App;
