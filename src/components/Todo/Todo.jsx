import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';
export default function Todo({ todo, onUpdate, onDelete }) {
  
  const [ status, setStatus ] = useState('active');
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    setStatus(status);
    onUpdate({ ...todo, status:status});
  }


  const handleDelete = () => {
    // console.log(`deleted todo : ${todo.text}`);
    onDelete(todo);
  }

  return(
    <>
      <li>
        <input 
          type='checkbox'
          id='checkbox' 
          onChange={handleChange} 
        />
        <label htmlFor="checkbox">{todo.text}</label>
        <button onClick={handleDelete}>DEL</button>
      </li>
    </>
  );








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

