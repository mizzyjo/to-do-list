// AddTodo.jsx
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
export default function AddTodo({ onAdd }) {

  const [ text, setText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({id: uuidv4(), text: text, status:'active'});
    // setText('');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text}
        onChange={handleChange}
      />
      <button>ADD</button>
    </form>
  );
}