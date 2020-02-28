let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const updateInput = value => {
    return {
        type: 'UPDATE_INPUT',
        inputText: value
    }
}

export const toggleTodoId = id => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
}