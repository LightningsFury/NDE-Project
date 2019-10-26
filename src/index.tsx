import React from "react";
import ReactDOM from "react-dom";
import { LoginArea } from "./ui/LoginArea/LoginArea";
import * as serviceWorker from "./serviceWorker";
import {BodyStyle} from './styles/BodyStyle';
import {StyledApp, StyledHeader} from "./styles/AppStyles";

// contains the login area within styled components. 
const Main: React.FunctionComponent = () => (
  <StyledApp>
    <StyledHeader>
      <LoginArea />
      <BodyStyle />
    </StyledHeader>
  </StyledApp>
);

// renders everything to the screen
ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
