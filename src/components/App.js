import React from "react";
import MarketLocationControl from "./MarketLocationControl";
import CropOfferingControl from "./CropOfferingControl";

function App() {
  return (
    <React.Fragment>
      <h1>Avery's Organic Farm</h1>
      <MarketLocationControl />
      <CropOfferingControl />
    </React.Fragment>
  );
}

export default App;
