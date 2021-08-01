import React from "react";
import "../styles/preview.css";

const Preview = ({ additionalCost, added, basePrice, setShowSummary }) => {
  return (
    <div className="result-wrapper">
      <div className="result-heading">PREVIEW</div>
      <div className="result-sub-heading">Your Add-Ons</div>
      <div className="selected-details-wrapper">
        <div className="result-initial-price">
          <div>Base Price</div>
          <div className="result-base-price">₹{basePrice}</div>
        </div>
        <div className="result-details-wrapper">
          {added.map((item, index) => (
            <div key={index} className="result-details">
              <div className="result-addon-name">{item.name}</div>
              <div className="result-addon-price">+ ₹{item.cost}</div>
            </div>
          ))}
        </div>
        <div className="result-total">
          <div>Total</div>
          <div className="result-total-price">
            ₹{basePrice + additionalCost}
          </div>
        </div>
      </div>
      <div className="result-cta">
        <button onClick={() => setShowSummary(false)}>Go Back</button>
      </div>
    </div>
  );
};

export default Preview;
