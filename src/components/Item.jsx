import React from 'react';

export default function Item({id, item, handleOnDel}) {
  return (
      <li>
        {item.text}
        <button onClick={() => {
          // console.log(id);
          handleOnDel(id)
        }}>DEL</button>
      </li>
    
  );
}

