// TodoList.jsx

import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {



  const [todos, setTodos] = useState([
    {id: '123', text:'공부하기', status: 'active'},
    {id: '124', text:'운동하기', status: 'active'}
  ]);

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이트
    console.log(todo);
    // todos를 빙글빙글 돌면서 새로운 껍데기를 만들고 업데이트 된 todo만 뒤에 추가해줌
    setTodos([ ...todos, todo]);
  }

  const handleUpdate = (updated) => {
    // 업데이트하고자 하는 것만 새로 대체해주고, 기존 아이템은 그대로 둔다.
    setTodos(todos.map(t => t.id === updated.id ? updated : t));
  }

  const handleDelete = (deleted) => {
    // 삭제하고자 하는 id가 아닌 것들만 모아서 set 해준다.
    setTodos(todos.filter(t => t.id !== deleted.id));
  }

  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
      {
          filtered.map((item) => (
          <Todo 
            key={item.id} 
            todo={item} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete}/>
          ))
        }
        {/* {
          todos.map((item) => (
          <Todo 
            key={item.id} 
            todo={item} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete}/>
          ))
        } */}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if(filter === 'all'){
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}