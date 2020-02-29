import React from 'react'
import AddTodo from '../components/AddTodo';
import FilterButton from '../components/FilterButton';
import TodoFilter from '../components/TodoFilter';

function App() {
  return (
      <div>
          <AddTodo />
          <FilterButton />
          <TodoFilter />
      </div>
  );
}

export default App;
