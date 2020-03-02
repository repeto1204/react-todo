import React from 'react'
import { connect } from 'react-redux'
import {
    addTodo,
    updateInput,
    asyncAction,
    startSagaFetch,
    startThunkFetch,
    resetTodo,
    resetFilter
} from '../store/actions/actions'

const AddTodo = (props) => {

  function addTodoList() {
    if(props.inputText === '') {
      return ;
    }
    props.addTodo(props.inputText);
    props.updateInput('');
  }


  return (
    <div>
        <input
          onChange={(e) => props.updateInput(e.target.value.trim())}
          value={props.inputText}
        />
        <button onClick={() => addTodoList()}>Add Todo</button>
        <button onClick={() => props.asyncAction()}>Async Action</button>
        <button onClick={() => props.startSagaFetch()}>Saga Async</button>
        <button onClick={() => props.startThunkFetch()}>Thunk Async</button>
        <button onClick={() => props.resetList()}>Reset List</button>
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
    updateInput: (value) => dispatch(updateInput(value)),
    asyncAction: () => dispatch(asyncAction()),
    startSagaFetch: () => dispatch(startSagaFetch()),
    startThunkFetch: () => dispatch(startThunkFetch()),
    resetList: () => {
      dispatch(resetTodo());
      dispatch(resetFilter());
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
