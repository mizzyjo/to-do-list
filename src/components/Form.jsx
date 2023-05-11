import React, { useState } from 'react';
import Item from './Item';

export default function Form({handleOnAdd}) {

  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(item) {
      handleOnAdd(item);
    }
  }

  const handleChange = (e) => {
    let temp = e.target.value;
    setItem(temp);
    console.log(`Item : ${item}`);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='item'></label>
        <input 
          type="text" 
          id='item'
          name='item'
          value={item} 
          onChange={handleChange} />
          <button>Add</button>
      </form>
    </>
  );
}


