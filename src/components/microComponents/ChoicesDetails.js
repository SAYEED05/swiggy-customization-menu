import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import "./choiceDetails.css";

const ChoicesDetails = ({ addons, shortDetails }) => {
  const [added, setAdded] = useState([]);
  const [additionalCost, setAdditionalCost] = useState([]);

  useEffect(() => {
    //GETTING THE TOTAL COST OF ALL THE SELECTED ITEMS

    setAdditionalCost(added.reduce((acc, item) => acc + Number(item.cost), 0)); //SUMMING ALL THE COST TO FIND THE TOTAL ADDITIONAL COST
  }, [added]);

  //HANDLER FOR INPUT SELECTION
  const selectHandler = (cost, name, e) => {
    let isSelected = e.currentTarget.checked;
    if (isSelected) {
      //IF THE CURRENT INPUT IS SELECTED ADD IT TO THE LIST
      setAdded([...added, { name, cost }]);
    } else {
      //IF THE CURRENT INPUT IS NOT LOOP THROUGH THE ADDED LIST
      added.forEach((el) => {
        if (el.name === name) {
          //IF THE NAME MATCHES AN INSTANCE ON THE LIST
          const filtered = added.filter((item) => item.name !== name); //FILTER IT AND SET THE REMAINING AS THE ADDED LIST
          setAdded(filtered);
        }
      });
    }
  };

  return (
    <>
      <div className="choices-details-wrapper">
        {addons.map(
          //MAPPING THROUGH ADD-ONS (1ST LAYER) TO GET NAME AND SEPERATE ADD-ONs
          (addon, index) => (
            <div key={index}>
              <div className="addon-title">{addon.name}</div>
              {addon.options.map(
                //MAPPING THROUGH OPTIONS (2ND LAYER) TO GET ADD-ON OPTIONS
                (option, optionIndex) => (
                  <div
                    key={`${optionIndex}${option.name}`}
                    className="addon-option-wrapper"
                  >
                    <div className="addon-option">
                      <input
                        type={addon.multipleSelect ? `checkbox` : "radio"}
                        id={option.name}
                        className="addon-input"
                        name="addon"
                        value={option.name}
                        onChange={(e) => {
                          selectHandler(option.cost, option.name, e);
                        }}
                      />
                      <label htmlFor="addon">{option.name}</label>
                    </div>
                    <div className="addon-option-cost">
                      {option.cost > 0 && `₹${option.cost}`}
                    </div>
                  </div>
                )
              )}
            </div>
          )
        )}
      </div>
      <Summary
        additionalCost={additionalCost}
        added={added}
        shortDetails={shortDetails}
      />
    </>
  );
};

export default ChoicesDetails;
