import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';


export default createStore(
    Reducers
)