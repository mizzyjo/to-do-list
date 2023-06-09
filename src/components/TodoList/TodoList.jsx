// TodoList.jsx
import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(getTodos);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo))
  }

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id))
  }

  const handleAdd = (added) => {
    setTodos([...todos, added]);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

function getTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter );
}