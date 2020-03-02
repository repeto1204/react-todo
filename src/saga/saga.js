import { put, takeLatest, all} from 'redux-saga/effects';

function* fetchTodos() {
  const json = yield fetch('http://jsonplaceholder.typicode.com/todos').then(response => response.json());
  yield put({type: 'GET_SAGA_JSON', json: json});
}

function* fetchWatcher() {
  yield takeLatest('START_SAGA', fetchTodos)
}

export default function* rootSaga() {
  yield all([
    fetchWatcher()
  ])
}