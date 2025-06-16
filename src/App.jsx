import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { HomeWrapper } from "./HomeWrapper";

function App() {
  return (
    <HelmetProvider>
      <div>
        <HomeWrapper />
      </div>
    </HelmetProvider>
  );
}

export default App;
