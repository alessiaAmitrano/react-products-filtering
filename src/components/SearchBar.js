import React from 'react';

export default function SearchBar(props) {
  function handleTextInputChange(event) {
    const isCheckboxChecked = document.getElementById('stock-toggle').checked;
    props.handleFilters(event.target.value, isCheckboxChecked);
  }

  function handleStockToggleChange(event) {
    const textFilter = document.getElementById('filter-text').value;
    props.handleFilters(textFilter, event.target.checked);
  }

  return (
    <div className='searchPanel'>
      <input
        type="text"
        name="filterText"
        id="filter-text"
        onChange={handleTextInputChange}
        placeholder="Filter items by name"
      />
      <br />
      <label htmlFor="stockToggle">
        <input
          type="checkbox"
          name="stockToggle"
          id="stock-toggle"
          onChange={handleStockToggleChange}
        />
        Only items in stock
      </label>
    </div>
  );
}
