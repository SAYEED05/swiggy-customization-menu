import React, { useState } from "react";

const ChoiceTabs = () => {
  //DATA TO IMITATE RESULT FROM API CALL
  const choices = [
    "Choice of Bread",
    "Choice of Vegetables",
    "Choice of Sauce Any (3)",
    "Choice of Free Cookie",
    "Choice of Beverages",
  ];

  //INITIALIZING VARIABLES TO SET AND CHANGE STATES

  const [selectedChoice, setSelectedChoice] = useState("");

  //FUNCTION TO HANDLE SELECTED CHOICE

  const selectHandler = (choice) => {
    setSelectedChoice(choice); //REMOVING SPACES TO COMPARE
  };

  const selectedStyle = {
    borderBottom: "1px solid #282c3f",
    color: "#282c3f",
  };

  return (
    <div className="choice-tabs-wrapper">
      <div className="choice-tabs-inner">
        <div className="choices">
          {choices.map((choice, index) => {
            return (
              <a
                key={index}
                className="choice"
                id={`#${choice.split(" ").join("")}`}
                href={`#${choice.split(" ").join("")}`}
                onClick={() => selectHandler(choice)}
                style={
                  //CHANGING STYLE BY COMPARING SELECTED CHOICE (SELECTED CHOICE) WITH CURRENT ITERATION OF CHOICES (CHOICE)
                  selectedChoice === choice ? selectedStyle : {}
                }
              >
                {choice}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChoiceTabs;
