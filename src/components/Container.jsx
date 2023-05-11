import React, { useState } from 'react';
import Item from './Item';
import Form from './Form';


export default function Container() {
  const [itemId, setItemId] = useState(3);
  const [items, setItems] = useState([
    {
      id: 0,
      text: '공부하기',
    },
    {
      id: 1,
      text: '운동하기',
    },
    {
      id: 2,
      text: '독서하기'
    },
  ]);

  const handleOnAdd = (text) => {
    setItems([ ...items, {id: itemId, text:text}])
    setItemId(itemId + 1);
    console.log('you clicked ADD');
  }

  const handleOnDel = (id) => {
    console.log(`you clicked DEL: ${id}`);
    setItems(items.filter((item) => {
      if(id != item.id) {
        console.log(`id: ${id} itemid : ${item.id}`);
        return item;
      }
    }))
  }


  return (
    <>
      { 
        items.map((item, index) => {
          // return <Item id={index} item={item} handleOnDel={handleOnDel}/>
          return <Item id={item.id} item={item} handleOnDel={handleOnDel}/>

        })
      }
      <Form handleOnAdd={handleOnAdd} />
    </>
  );
}

