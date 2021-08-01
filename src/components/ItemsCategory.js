import React from 'react';

export default function ItenmsCategory(props) {
  return (
    <>
    <h2>{props.category}</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
      <tbody>
        {props.items.map(item => {
          return (
            <tr className={item.stocked? '' : 'outOfStock'}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stocked ? 'in stock' : 'out of stock'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}
