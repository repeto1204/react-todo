import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers/reducers';
import createReduxSaga from 'redux-saga';
import thunk from 'redux-thunk'
import rootSaga from '../saga/saga';

const sagaMiddleWare = createReduxSaga();
const middleWares = [sagaMiddleWare, thunk]

export default createStore(
  Reducers,
  applyMiddleware(...middleWares)
)

sagaMiddleWare.run(rootSaga);