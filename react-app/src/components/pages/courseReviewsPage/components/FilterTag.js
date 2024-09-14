import React from 'react';
import './FilterTag.css';

const FilterTag = ({ label, onRemove }) => {
  return (
    <div className="filter-tag">
      {label}
      <button className="remove-button" onClick={onRemove}>X</button>
    </div>
  );
};

export default FilterTag;