import React from 'react'
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';

function App() {
  return (
      <div>
          <AddTodo />
          <VisibleTodoList />
      </div>
  );
}

export default App;
