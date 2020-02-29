import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos && props.todos.map(todo =>
        <li
          key={todo.id}
          onClick={() => props.toggleTodo(todo.id)}
          style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
        >
        {todo.title}
        </li>
      )}
    </ul>)
}


export default TodoList