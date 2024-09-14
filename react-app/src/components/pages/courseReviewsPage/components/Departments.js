import React, { useState } from "react";
import "./FilterOptions.css";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DeptButton = ({ onDeptSelect }) => {
  const [optionsVisible, areOptionsVisible] = useState(false);
  const options = ["CMSC", "ECON"];
  const toggle = () => areOptionsVisible(!optionsVisible);
  const handleOptionClick = (option) => {
    onDeptSelect(option);
    areOptionsVisible(false);
  }

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
        Department
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

export default DeptButton;
