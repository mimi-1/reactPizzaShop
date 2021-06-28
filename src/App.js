import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./Components/Navbar/navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin:0;
  }

   h1,h2,h3 {
     font-family: 'Freckle Face', cursive;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <h1>Vi&Mary's cupcake shop</h1>
      <div>Welcome my dear cupcake lovers!</div>
      <GlobalStyle />
    </>
  );
}

export default App;
