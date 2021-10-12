import { createStore } from "redux";
import CounterReducer from "./CounterApp/reducer";
import TodoReducer from "./TodoList/reducer";

// const store = createStore(CounterReducer)
const store = createStore(TodoReducer)

export default store