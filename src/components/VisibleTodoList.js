import { connect } from 'react-redux'
import React from "react";
import { toggleTodoId } from '../store/actions'

const TodoList = (props) => {
    return (
        <ul>
        {props.todos && props.todos.map(todo =>
            <li
                key={todo.id}
                onClick={() => props.toggleTodoId(todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
            {todo.text}
            </li>
        )}
    </ul>)
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodoId: id => dispatch(toggleTodoId(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
