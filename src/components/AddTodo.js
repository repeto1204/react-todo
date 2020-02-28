import React from 'react'
import { connect } from 'react-redux'
import { addTodo, updateInput } from '../store/actions'

const AddTodo = (props) => {
  // dispatch(dummy());
  // dummy();


  function addTodoList(e) {
    e.preventDefault();
    if(props.inputText === '') {
      return ;
    }
    props.addTodo(props.inputText);
    props.updateInput('');
  }

  return (
    <div>
      <form onSubmit={(e) => addTodoList(e)}>
        <input
            onChange={(e) => props.updateInput(e.target.value.trim())}
            value={props.inputText}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    inputText: state.changeInput.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => dispatch(addTodo(value)),
    updateInput: (value) => dispatch(updateInput(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
