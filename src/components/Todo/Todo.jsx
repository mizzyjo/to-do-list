import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
export default function Todo({ todo, onUpdate, onDelete }) {
  
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({ ...todo, status: status});
  }
  
  const handleDelete = () => {
    onDelete(todo);
  }

  return(
    <>
      <li>
        <input 
          type='checkbox'
          id='checkbox'
          onChange={handleChange}
          checked= {todo.status === 'completed'}
        />
        <label for='checkbox'>{todo.text}</label>
        <button onClick={handleDelete}><FaTrashAlt/></button>
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

