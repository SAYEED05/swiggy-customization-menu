import React from "react";
import "../styles/summary.css";
const Summary = ({ additionalCost, added, shortDetails }) => {
  const price = shortDetails.map((item) => item.basePrice);
  const basePrice = parseInt(price);

  const addItemHandler = () => {
    window.alert("added");
  };

  return (
    <div className="summary-wrapper">
      <div className="summary-content">
        <div className="add-ons-details">
          <div className="add-on-full" style={{ display: "flex" }}>
            {added.slice(0, added.length > 1 ? 2 : 1).map((item, index) => (
              <div key={index}>{item.name},</div>
            ))}
          </div>
          <div className="add-on-short">
            {added.length > 2 && `+${added.length - 2}  Add On`}
          </div>
        </div>
        <div className="add-ons-total-strip" onClick={addItemHandler}>
          <div className="total-amount">
            Total ₹{basePrice + additionalCost}
          </div>
          <div className="add-item-cta">ADD ITEM</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
