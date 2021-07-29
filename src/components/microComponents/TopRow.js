import React from "react";
import closeIcon from "../../assets/close-icon.svg";

const TopRow = () => {
  return (
    <div className="top-row-wrapper">
      <div className="title">
        Customize “BFF Veg Sub Combo (15cm , 6 inch)”
        <div className="initial-price">₹371</div>
      </div>
      <div className="action-close">
        <button className="close-button">
          <img className="close-icon" src={closeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TopRow;
