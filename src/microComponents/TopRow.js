import React from "react";
import closeIcon from "../assets/close-icon.svg";
import "../styles/topRow.css";
const TopRow = ({ shortDetails }) => {
  return (
    <>
      {shortDetails.map((item, index) => (
        <div className="top-row-wrapper" key={index}>
          <div className="title">
            Customize "{item.name}"
            <div className="initial-price">₹{item.basePrice}</div>
          </div>
          <div className="action-close">
            <button className="close-button">
              <img className="close-icon" src={closeIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopRow;
