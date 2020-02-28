import { combineReducers } from 'redux'
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            console.log('Toggle');
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        // case 'Async_Result':
        //   console.log(action);
        //   return state;
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

export default combineReducers({
    todos,
    changeInput
})
