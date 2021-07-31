import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import Category from "./Category";
import "../../styles/choiceDetails.css";

const ChoicesDetails = ({ addons, shortDetails }) => {
  const [added, setAdded] = useState([]);
  const [additionalCost, setAdditionalCost] = useState([]);

  useEffect(() => {
    getAdditionalCost(); //CALL 'GET ADDITIONAL COST' FUNCTION EVERYTIME 'ADDED' ARRAY CHANGES

    // eslint-disable-next-line
  }, [added]);

  //HANDLER FOR OVERALL INPUT SELECTION LOGICS
  const selectHandler = (cost, name, e, limit) => {
    const isSelected = e.currentTarget.checked;

    if (isSelected) {
      //CHECKING WHEATHER THE CURRENT INPUT IS CHECKBOX
      if (e.currentTarget.type === "checkbox") {
        checkBoxInput(name, cost, e, limit);
        //CHECKING WHEATHER THE CURRENT INPUT IS RADIO
      } else if (e.currentTarget.type === "radio") {
        radioInput(name, cost, e);
      }
    } else {
      //IF THE CURRENT INPUT IS NOT SELECTED CALL 'UNSELECT' FUNCTION
      unSelect(e, name);
    }
  };

  //FUNCTION TO HANDLE CHECKBOX INPUT LOGICS

  const checkBoxInput = (name, cost, e, limit) => {
    //GET NUMBER OF ITEMS IN 'ADDED' ARRAY WITH SAME GROUP NAME AND FIND IT'S LENGTH
    let arr = [];
    added.map((el) => arr.push(el.groupName));
    const arrLength = arr.filter(
      (v) => v === e.target.attributes[3].nodeValue
    ).length;

    //CHECK WEATHER THE GROUP HAS ANY LIMIT (IF 0 THEN NO LIMIT)
    if (arrLength < limit || limit === 0) {
      setAdded([
        ...added,
        { name, cost, groupName: e.target.attributes[3].nodeValue },
      ]);
    }
  };

  //FUNCTION TO HANDLE RADIO BUTTON INPUT LOGICS

  const radioInput = (name, cost, e) => {
    const index = added
      .map((e) => e.groupName)
      .indexOf(e.target.attributes[3].nodeValue);

    if (~index) {
      //IF EXISTS

      /* MUTATING AN EXISTING ARRAY WILL NOT RERENDER THE DOM AND ALSO NOT A GOOD PRACTICE.SO,
      CREATE NEW ARRAY SINCE THE ORIGINAL AND COPIED ARRAYS WILL CONTAIN IDENTICAL INDICES */
      const newAdded = [...added];
      newAdded[index] = {
        name,
        cost,
        groupName: e.target.attributes[3].nodeValue,
      };

      setAdded(newAdded);
    } else {
      //IF DOESN'T EXISTS ADD IT TO 'ADDED' LIST
      setAdded([
        ...added,
        { name, cost, groupName: e.target.attributes[3].nodeValue },
      ]);
    }
  };

  //FUNCTION TO HANDLE UNSELECTED INPUT LOGICS
  const unSelect = (e, name) => {
    //LOOPING THROUGH THE 'ADDED LIST' TO CHECK FOR ANY MATCHES
    added.forEach((el) => {
      if (el.name === name) {
        //IF THE NAME MATCHES AN INSTANCE ON THE LIST
        const filtered = added.filter((item) => item.name !== name); //FILTER THE CURRENT 'ADDED LIST' BASED ON THE NAME
        setAdded(filtered); //SET THE REMAINING AS THE NEW 'ADDED LIST'
      }
    });
  };

  //FUNCTION TO GET TOTAL ADDITIONAL COST
  const getAdditionalCost = () => {
    setAdditionalCost(added.reduce((acc, item) => acc + Number(item.cost), 0)); //SUMMING ALL THE COST TO FIND THE TOTAL ADDITIONAL COST
  };

  return (
    <>
      <div className="choices-details-wrapper">
        {addons.map(
          //MAPPING THROUGH ADD-ONS (1ST LAYER) TO GET NAME AND SEPERATE ADD-ONs
          (addon, index) => (
            <div key={index} id={addon.name.split(" ").join("")}>
              <div className="addon-title">
                {addon.name}
                {addon.limit > 0 && (
                  <span className="addon-limit">{` Any (${addon.limit})`}</span>
                )}
              </div>
              {addon.options.map(
                //MAPPING THROUGH ADDON OPTIONS (2ND LAYER) TO GET SEPERATE OPTIONs
                (option, optionIndex) => (
                  <div
                    key={`${optionIndex}${option.name}`}
                    className="addon-option-wrapper"
                  >
                    <Category option={option.isVeg} />
                    <div className="addon-option">
                      <label htmlFor={addon.name.split(" ").join("")}>
                        <input
                          type={addon.multipleSelect ? `checkbox` : "radio"}
                          className="addon-input"
                          name={addon.name.split(" ").join("")}
                          value={option.name}
                          onChange={(e) => {
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
