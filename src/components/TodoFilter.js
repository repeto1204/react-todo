import { connect } from 'react-redux';
import { toggleTodo } from '../store/actions/actions';
import VisibleTodoList from './VisibleTodoList';

const getVisibleTodoList = (todoList, filterType) => {
  switch (filterType) {
    case 'ALL':
      return todoList;
    case 'ACTIVE':
      return todoList.filter(el => !el.completed);
    case 'COMPLETED':
      return todoList.filter(el => el.completed);
    default:
      throw new Error(`FILTER ERROR! : ${filterType}`);
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodoList(state.todos, state.filterType)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)
