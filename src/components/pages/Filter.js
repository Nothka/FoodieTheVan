// Filter.js
import React from 'react';

function Filter({ onSelect }) {
  const handleSelect = (category) => {
    onSelect(category);
  };

  return (
    <div className="filter-options">
      <button onClick={() => handleSelect('burgers')}>Burgers</button>
      <button onClick={() => handleSelect('tortilla')}>Tortilla</button>
      <button onClick={() => handleSelect('sandwiches')}>Sandwiches</button>
    </div>
  );
}

export default Filter;
