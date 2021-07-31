import React, { useState } from "react";
import "../styles/choiceTabs.css";
const ChoiceTabs = ({ addons }) => {
  const choices = [];
  const [selectedChoice, setSelectedChoice] = useState("");

  addons.map((el) => choices.push(el.name));

  const selectHandler = (choice) => {
    setSelectedChoice(choice);
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
                href={`#${choice.split(" ").join("")}`}
                onClick={() => selectHandler(choice)}
                style={selectedChoice === choice ? selectedStyle : {}}
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
