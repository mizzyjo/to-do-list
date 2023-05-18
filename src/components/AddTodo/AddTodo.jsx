import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
export default function AddTodo({ onAdd }) {

  const [ text, setText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text: text, status:'active'});

  }
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text}
          onChange={handleChange}
        />
        <button >ADD</button>
      </form>
    </>
  );









  // const [text, setText] = useState('');
  // const handleChange = (e) => setText(e.target.value);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(text.trim().length === 0) {
  //     return;
  //   }
  //   onAdd({id: uuidv4(), text, status: 'active'});
  //   setText('');
  // };
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input 
  //       type='text' 
  //       placeholder='Add Todo' 
  //       value={text} 
  //       onChange={handleChange} 
  //     />
  //     <button>Add</button>
  //   </form>
  // );
}

