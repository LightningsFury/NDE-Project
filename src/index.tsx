import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LoginArea } from "./components/LoginArea";
import * as serviceWorker from "./serviceWorker";
import styled, { CreateStyled } from "@emotion/styled";

const Main: React.FunctionComponent = () => (
  <div className="App">
    <header className="App-header">
      <LoginArea />
    </header>
  </div>
);

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
