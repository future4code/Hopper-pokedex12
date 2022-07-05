import Router from "./router/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100vh;
  }
`;

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  ); 
}

export default App;

