// App.jsx
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './components/context/DarkModeContext';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleFilterChange = (filtered) => {
    setFilter(filtered);
  };

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
