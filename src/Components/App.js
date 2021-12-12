import React, { useState } from "react";
import PlanSwitch from "./PlanSwitch";
import PricingCards from "./PricingCards";

const App = () => {
  const [toggleClick, setToggleClick] = useState(false);
  return (
    <>
      <main>
        <div className="pricing-top">
          <h1 className="main-title">Our Pricing</h1>
          <PlanSwitch setToggleClick={setToggleClick} />
        </div>
        <PricingCards toggleClick={toggleClick} />
      </main>
    </>
  );
};

export default App;
