import { combineReducers } from "redux";
import CounterReducer from "./CounterApp/reducer";
import TodoReducer from "./TodoListRedux/reducer";

const rootReducer = combineReducers({
  count: CounterReducer, //
  todos: TodoReducer,
})

export default rootReducer