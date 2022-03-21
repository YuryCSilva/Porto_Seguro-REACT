import React, { useEffect } from "react";
import { ObtainDataProvider } from "./hooks/userData";
import { CreateDataProvider } from "./hooks/userDataCard";
import { Router } from "./routes/Router";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ObtainDataProvider>
        <CreateDataProvider>
          <Router />
        </CreateDataProvider>
      </ObtainDataProvider>
    </React.Fragment>
  );
}

export default App;
