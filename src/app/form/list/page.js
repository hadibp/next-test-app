// List.js
"use client";

import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const itemList = useSelector((state) => state.itemList);
  console.log(itemList);

  return (
    <div>
      <h1>List Page</h1>
      {itemList.map((item, index) => (
        <div key={index} className="list-item">
          <h3>{item.name}</h3>
          <p>Email: {item.email}</p>
          <p>Address: {item.address}</p>
        </div>
      ))}

    </div>
  );
};

export default List;
