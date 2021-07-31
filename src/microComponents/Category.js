import React from "react";
import vegIcon from "../assets/veg-icon.png";
import nonVegIcon from "../assets/non-veg-icon.png";
const Category = ({ option }) => {
  return (
    <div className="category">
      {option ? (
        <img className="food-category veg" src={vegIcon} alt="veg-icon" />
      ) : (
        <img
          className="food-category non-veg"
          src={nonVegIcon}
          alt="non veg icon"
        />
      )}
    </div>
  );
};

export default Category;
