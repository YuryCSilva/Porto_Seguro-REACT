import React from "react";
import { Router } from "./routes/Router";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router />
    </React.Fragment>
  );
}

export default App;
