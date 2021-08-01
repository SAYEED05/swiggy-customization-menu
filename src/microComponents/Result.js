import React from "react";
import "../styles/result.css";
import burgerFloatImg from "../assets/burger-float.png";
/* import foodAnimation from "../assets/food-animation.mp4"; */
const Result = ({ additionalCost, added, basePrice, setShowSummary }) => {
  return (
    <div className="result-wrapper">
      <div className="result-heading">ADDED SUCCESSFULLY</div>

      <div className="result-image">
        <img src={burgerFloatImg} alt="burger floating" />
      </div>
      <div className="result-sub-heading">Your Selections</div>
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

export default Result;
