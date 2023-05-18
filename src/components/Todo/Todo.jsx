import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';
export default function Todo({ todo, onUpdate, onDelete }) {
  
  const [status, setStatus] = useState('active');

  const handleChange = (e) => {
    console.log(e.target.checked);
    setStatus(e.target.checked ? 'completed' : 'active');
    onUpdate(todo);
  }
  
  const handleDelete = () => {
    onDelete(todo);
  }

  return (
    <>
      <li>
        <input 
          type="checkbox" 
          id='checkbox'
          value={todo.text}
          onChange={handleChange}
        />
        {todo.text}
        <button onClick={handleDelete}>DEL</button>
      </li>
    </>
  )







  // const {text, status} = todo;
  // const handleChange = (e) => {
  //   const status = e.target.checked ? 'completed' : 'active';
  //   onUpdate({ ...todo, status: status });
  // }
  // const handleDelete = () => onDelete(todo);
  // return (
  //   <li>
  //     <input 
  //       type="checkbox" 
  //       id='checkbox' 
  //       checked ={status === 'completed'}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="checkbox">{text}</label>
  //     <button onClick={handleDelete}><FaTrashAlt/></button>
  //   </li>
  // );
}

