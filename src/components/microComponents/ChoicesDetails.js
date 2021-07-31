import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import "./choiceDetails.css";

const ChoicesDetails = ({ addons, shortDetails }) => {
  const [added, setAdded] = useState([]);
  const [additionalCost, setAdditionalCost] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    getAdditionalCost(); //CALL GET ADDITIONAL COST FUNCTION EVERYTIME 'ADDED' ARRAY CHANGES
    // eslint-disable-next-line
  }, [added]);

  //HANDLER FOR OVERALL INPUT SELECTION LOGICS
  const selectHandler = (cost, name, e, limit) => {
    console.log(limit);
    const isSelected = e.currentTarget.checked;

    if (isSelected) {
      //CHECKING WHEATHER THE CURRENT INPUT IS CHECKBOX
      if (e.currentTarget.type === "checkbox") {
        checkBoxInput(name, cost, e);
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

  const checkBoxInput = (name, cost, e) => {
    setAdded([
      ...added,
      { name, cost, groupName: e.target.attributes[3].nodeValue },
    ]);
    setCheckedList([...checkedList, name]);
  };

  //FUNCTION TO HANDLE RADIO INPUT LOGICS

  const radioInput = (name, cost, e) => {
    const index = added
      .map((e) => e.groupName)
      .indexOf(e.target.attributes[3].nodeValue);

    if (~index) {
      //IF EXISTS

      /* MUTATING AN EXISTING ARRAY WILL NOT RERENDER THE DOM AND ALOS NOT A GOOD PRACTICE.SO,
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
        if (e.currentTarget.type === "checkbox") {
          //IF THE CURRENT INPUT IS CHECKBOX.FILTER THE 'CHECKED LIST' TOO
          const filteredCheckedList = checkedList.filter(
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
