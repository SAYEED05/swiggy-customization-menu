import React from "react";
import ChoicesDetails from "./ChoicesDetails";
import ChoiceTabs from "./microComponents/ChoiceTabs";
import Summary from "./microComponents/Summary";
import TopRow from "./microComponents/TopRow";

const CustomizeMenu = () => {
  return (
    <div className="customize-menu-wrapper">
      <div className="customize-menu-inner">
        <TopRow />
        <ChoiceTabs />
        <ChoicesDetails />
        <Summary />
      </div>
    </div>
  );
};

export default CustomizeMenu;
