// TodoList.jsx
import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({filter}) {
  const [todos, setTodos] = useState([
    { id: 123, text: '운동하기', status: 'active'},
    { id: 124, text: '독서하기', status: 'active'}
  ])

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo))
  }

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id != deleted.id))
  }

  const handleAdd = (added) => {
    setTodos([...todos, added]);
  }

  const filtered = getFilteredItems(todos, filter);

  return (
    <section>
      <ul>
        {
          filtered.map((todo) => (
            <Todo 
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter(() => {})
}