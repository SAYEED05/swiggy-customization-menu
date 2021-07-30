import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import "./choiceDetails.css";

const ChoicesDetails = ({ addons, shortDetails }) => {
  const [added, setAdded] = useState([]);
  const [additionalCost, setAdditionalCost] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  //HANDLER FOR INPUT SELECTION
  const selectHandler = (cost, name, e, limit) => {
    let isSelected = e.currentTarget.checked;

    if (isSelected) {
      setAdded([...added, { name, cost }]); //IF THE CURRENT INPUT IS SELECTED ADD IT TO THE LIST
      e.currentTarget.type === "checkbox" && //CHECKING WHEATHER THE CURRENT INPUT IS CHECKBOX
        setCheckedList([...checkedList, name]);
    } else {
      unSelect(e, name); //CALL UNSELECT FUNCTION
    }
  };

  //FUNCTION TO HANDLE UNSELECTED INPUT
  const unSelect = (e, name) => {
    //IF THE CURRENT INPUT IS UNSSELECTED  LOOP THROUGH THE 'ADDED LIST'

    added.forEach((el) => {
      if (el.name === name) {
        //IF THE NAME MATCHES AN INSTANCE ON THE LIST
        const filtered = added.filter((item) => item.name !== name); //FILTER IT AND SET THE REMAINING AS THE 'ADDED LIST'
        setAdded(filtered);
        if (e.currentTarget.type === "checkbox") {
          const filteredCheckedList = checkedList.filter(
            //IF THE CURRENT INPUT IS CHECKBOX.FILTER THE 'CHECKED LIST' TOO
            (item) => item !== name
          );
          setCheckedList(filteredCheckedList);
        }
      }
    });
  };

  //FUNCTION TO GET ADDITIONAL COST
  const getAdditionalCost = () => {
    setAdditionalCost(added.reduce((acc, item) => acc + Number(item.cost), 0)); //SUMMING ALL THE COST TO FIND THE TOTAL ADDITIONAL COST
  };

  useEffect(() => {
    getAdditionalCost(); //CALL GET ADDITIONAL COST EEVERYTIME 'ADDED' CHANGES

    // eslint-disable-next-line
  }, [added]);

  console.log(added);

  return (
    <>
      <div className="choices-details-wrapper">
        {addons.map(
          //MAPPING THROUGH ADD-ONS (1ST LAYER) TO GET NAME AND SEPERATE ADD-ONs
          (addon, index) => (
            <div key={index}>
              <div className="addon-title">{addon.name}</div>
              {addon.options.map(
                //MAPPING THROUGH ADDON OPTIONS (2ND LAYER) TO GET SEPERATE OPTIONs
                (option, optionIndex) => (
                  <div
                    key={`${optionIndex}${option.name}`}
                    className="addon-option-wrapper"
                  >
                    <div className="addon-option">
                      <label htmlFor={addon.name.split(" ").join("")}>
                        <input
                          type={addon.multipleSelect ? `checkbox` : "radio"}
                          id={option.name}
                          className="addon-input"
                          name={addon.name.split(" ").join("")}
                          value={option.name}
                          onChange={(e) => {
                            console.log(e.target.attributes[3]);
                            selectHandler(
                              option.cost,
                              option.name,
                              e,
                              addon.limit
                            );
                          }}
                        />

                        {option.name}
                      </label>
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
