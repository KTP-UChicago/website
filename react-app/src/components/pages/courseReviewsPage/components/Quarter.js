import React, { useState } from "react";
import "./FilterOptions.css";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const QuarterButton = ({ onQuarterSelect }) => {
  const [optionsVisible, areOptionsVisible] = useState(false);
  const options = ["Autumn 2024", "Winter 2025", "Spring 2025"];
  const toggle = () => areOptionsVisible(!optionsVisible);
  const handleOptionClick = (option) => {
    onQuarterSelect(option);
    areOptionsVisible(false);
  };

  return (
    <div className="filter-box">
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "#f0f0f0",
          borderColor: "#a0a0a0",
          color: "black",
          ":hover": {
            backgroundColor: "#d0d0d0",
            borderColor: "#707070",
          },
          textTransform: "none",
        }}
        endIcon={<ArrowDropDownIcon />}
        className="filter-button"
        onClick={toggle}
      >
        Quarter
      </Button>
      {optionsVisible && (
        <div className="filter-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                handleOptionClick(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuarterButton;
