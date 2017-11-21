import { combineReducers } from 'redux';
import ReducerHello from './reducerHello';

const rootReducer = combineReducers({
  hello: ReducerHello
});

export default rootReducer;