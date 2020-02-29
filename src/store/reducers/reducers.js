import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ];
    case 'GET_SAGA_JSON':
      return action.json;
    case 'GET_THUNK_JSON':
      return action.value;
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
    case 'RESET_TODO':
      return [];
    default:
      return state
  }
}

const changeInput =  (state = {value: ''}, action) => {
  if (action.type === 'UPDATE_INPUT') {
    return { value: action.inputText}
  } else {
    return state;
  }
}

const filterType = (state = 'ALL', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filterType;
    case 'RESET_FILTER':
      return 'ALL';
    default:
      return state;
  }
}

const fetchJSON = (state = '', action) => {
  switch (action.type) {
    case 'START_JSON':
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  changeInput,
  filterType,
  fetchJSON
})
