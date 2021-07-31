import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import Category from "./Category";
/* import Result from "./Result"; */
import "../styles/choiceDetails.css";

const ChoicesDetails = ({ addons, shortDetails }) => {
  const [added, setAdded] = useState([]);
  const [additionalCost, setAdditionalCost] = useState([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    getAdditionalCost(); //CALL 'GET ADDITIONAL COST' FUNCTION EVERYTIME 'ADDED' ARRAY CHANGES

    // eslint-disable-next-line
  }, [added]);

  //CHECK WEATHER ALL THE REQUIRED ADDONS ARE SELECTED

  const reqiredAddonsCheck = () => {
    let addedGroups = [];
    let requiredGroups = [];
    added.map((el) => addedGroups.push(el.groupName)); //MAP OVER 'ADDED' TO GET ALL GROUP NAMES
    let unique = [...new Set(addedGroups)]; //NEW ARRAY WITH ONY UNIQUE VALUES

    // eslint-disable-next-line
    addons.map((el) => {
      //MAP OVER 'ADDONS' TO GET ALL GROUPS WITH REQUIRED
      if (el.required) {
        requiredGroups.push(el.name.split(" ").join(""));
      }
    });

    let checker = requiredGroups.every((v) => unique.includes(v));

    return addedGroups.length === 0 ? false : checker;
  };

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
    const arrLength = arr.filter((v) => v === e.target.name).length;
    //CHECK WEATHER THE GROUP HAS ANY LIMIT (IF 0 THEN NO LIMIT)
    if (arrLength < limit || limit === 0) {
      setAdded([...added, { name, cost, groupName: e.target.name }]);
      setShowError(false);
    } else {
      e.target.checked = false; //SETTING CHECKED TO FALSE IF THE CHECKBOX GROUP IS ALREADY MET THE  SPECIFIED LIMIT
      setShowError(true); //TO SHOW THE ERROR MESSAGE

      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  //FUNCTION TO HANDLE RADIO BUTTON INPUT LOGICS

  const radioInput = (name, cost, e) => {
    const index = added.map((e) => e.groupName).indexOf(e.target.name);

    if (~index) {
      //IF EXISTS

      /* MUTATING AN EXISTING ARRAY WILL NOT RERENDER THE DOM AND ALSO NOT A GOOD PRACTICE.SO,
      CREATE NEW ARRAY SINCE THE ORIGINAL AND COPIED ARRAYS WILL CONTAIN IDENTICAL INDICES */
      const newAdded = [...added];
      newAdded[index] = {
        name,
        cost,
        groupName: e.target.name,
      };

      setAdded(newAdded);
    } else {
      //IF DOESN'T EXISTS ADD IT TO 'ADDED' LIST
      setAdded([...added, { name, cost, groupName: e.target.name }]);
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

                <span className="addon-required">
                  {addon.required ? "(required)" : "(optional)"}
                </span>
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
                      <label>
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
      {showError && (
        <div className="show-error">
          <div className="error-content">
            Maximum Choice of selections reached
          </div>
        </div>
      )}
      <Summary
        additionalCost={additionalCost}
        added={added}
        shortDetails={shortDetails}
        checkerFunction={reqiredAddonsCheck}
      />
      {/* <Result /> */}
    </>
  );
};

export default ChoicesDetails;
