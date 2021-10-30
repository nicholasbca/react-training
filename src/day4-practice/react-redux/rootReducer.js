import CounterReducer from "./CounterApp/reducer";
import TodoReducer from "./TodoListRedux/reducer";

const rootReducer = {
  count: CounterReducer, //
  todos: TodoReducer
}

export default rootReducer