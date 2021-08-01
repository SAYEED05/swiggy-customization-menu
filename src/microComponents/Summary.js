import React, { useEffect, useState } from "react";
import "../styles/summary.css";
import Preview from "./Preview";
const Summary = ({ additionalCost, added, shortDetails, checkerFunction }) => {
  const price = shortDetails.map((item) => item.basePrice);
  const basePrice = parseInt(price);
  const [canAdd, setCanAdd] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const addItemHandler = () => {
    if (canAdd) {
      setShowError(false);
      setShowSummary(true);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setCanAdd(checkerFunction());

    // eslint-disable-next-line
  }, [added]);

  return (
    <>
      {showError && (
        <div className="show-error">
          <div className="error-content">Select all the required fields</div>
        </div>
      )}
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
          <div
            className="add-ons-total-strip"
            onClick={addItemHandler}
            style={{ background: canAdd ? "#60b246" : "grey" }} //CHANGING THE COLOR BASED ON CHECKER FUNCTIONS
          >
            <div className="total-amount">
              Total ₹{basePrice + additionalCost}
            </div>
            <div className="add-item-cta">ADD ITEM</div>
          </div>
        </div>
      </div>
      {showSummary && (
        <Preview
          additionalCost={additionalCost}
          added={added}
          basePrice={basePrice}
          setShowSummary={setShowSummary}
        />
      )}
    </>
  );
};

export default Summary;
