import React from "react";

const PlanSwitch = ({ setToggleClick }) => {
  return (
    <>
      <div className="plan-switch">
        <p className="plan">Annually</p>
        <label className="toggle-btn">
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => setToggleClick((prev) => !prev)}
          ></input>
          <span className="slider"></span>
        </label>
        <p className="plan">Monthly</p>
      </div>
    </>
  );
};

export default PlanSwitch;
