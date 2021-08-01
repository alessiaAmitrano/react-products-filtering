import React from 'react';
import ItemsCategory from './ItemsCategory';

export default function ItemsList(props) {

  function getItemsPerCategory(category) {
    let itemsPerCat = [];
    for (const item of props.items ) {
      if(item.category === category) {
        itemsPerCat.push(item);
      }
    }
    return itemsPerCat;
  }

  return (
    <div>
      { props.categories.map((category => {
        const itemsPerCategory = getItemsPerCategory(category);
          return <ItemsCategory category={category} items={itemsPerCategory}
          key={category} />
           }))
      }
    </div>
  );
}
