import React, { useState, useEffect } from "react";
import ChoicesDetails from "./microComponents/ChoicesDetails";
import ChoiceTabs from "./microComponents/ChoiceTabs";
import TopRow from "./microComponents/TopRow";
import sampleData from "../sampleData"; //SAMPLE DATA TO MIMIC API/BACKEND FETCHED DATA

const CustomizeMenu = () => {
  const [shortDetails, setShortDetails] = useState([]);
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    sampleData.map((data) => {
      setShortDetails([
        {
          id: data.id,
          name: data.name,
          image: data.image,
          description: data.description,
          basePrice: data.basePrice,
        },
      ]);
      setAddons(data.addOns);
    });
  }, []);

  return (
    <div className="customize-menu-wrapper">
      <div className="customize-menu-inner">
        <TopRow shortDetails={shortDetails} />
        <ChoiceTabs addons={addons} />
        <ChoicesDetails shortDetails={shortDetails} addons={addons} />
      </div>
    </div>
  );
};

export default CustomizeMenu;
