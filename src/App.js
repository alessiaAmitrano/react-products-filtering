import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import SearchBar from './components/SearchBar';
import ItemsList from './components/ItemsList';

const DEFAULT_STOCK_ITEMS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

export default function App() {
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState(DEFAULT_STOCK_ITEMS);

  function handleFilters(textInput, inStockOnly) {
    const itemsFilteredByText = filterItemsByText(textInput);
    const itemsFilteredByStock = filterItemsByStockState(
      itemsFilteredByText,
      inStockOnly
    );
    setFilteredItems(itemsFilteredByStock);
  }

  function filterItemsByText(filterText) {
    let filteredArray = DEFAULT_STOCK_ITEMS.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    return filteredArray;
  }

  function filterItemsByStockState(items, inStockOnly) {
    let tempArray = items;
    if (inStockOnly) {
      tempArray = items.filter(item => item.stocked);
    }
    return tempArray;
  }

  useEffect(() => {
    let tempArray = [];
    for (const item of filteredItems) {
      if (tempArray.indexOf(item.category) === -1) {
        tempArray.push(item.category);
      }
    }
    setCategories(tempArray);
    console.log(tempArray);
  }, []);

  return (
    <div>
      <SearchBar handleFilters={handleFilters} />
      <ItemsList categories={categories} items={filteredItems} />
    </div>
  );
}
