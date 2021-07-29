import React from "react";

const Summary = () => {
  return (
    <div className="summary-wrapper">
      <div className="summary-inner">
        <div className="summary-content">
          <div className="add-ons-details">
            <div className="add-on-full">Multigrain Bread,Lettuce</div>
            <div className="add-on-short">+3 Add On</div>
          </div>
          <div className="add-ons-total-strip">
            <div className="total-amount">Total ₹419</div>
            <div className="add-item-cta">ADD ITEM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
