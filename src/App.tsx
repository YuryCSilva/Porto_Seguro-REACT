import React from "react";
import { CreateDataProvider } from "./hooks/userDataCard";
import { Router } from "./routes/Router";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <CreateDataProvider>
        <Router />
      </CreateDataProvider>
    </React.Fragment>
  );
}

export default App;
