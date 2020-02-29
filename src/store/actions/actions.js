let nextTodoId = 1000;
export const addTodo = title => {
  return {
    type: 'ADD_TODO',
    id: ++nextTodoId,
    title
  }
}

export const updateInput = value => {
  return {
    type: 'UPDATE_INPUT',
    inputText: value
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const changeFilter = filterType => {
  return {
    type: 'CHANGE_FILTER',
    filterType
  }
}

export const startSagaFetch = () => {
  return {
    type: 'START_SAGA'
  }
}

export const startThunkFetch = () => {
  return (dispatch) => {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(async (response) => {
      dispatch({ type: 'GET_THUNK_JSON', value : await response.json() })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const resetTodo = () => {
  return {
    type: 'RESET_TODO'
  }
}

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  }
}