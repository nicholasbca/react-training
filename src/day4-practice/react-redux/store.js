import { applyMiddleware, createStore } from "redux";
import CounterReducer from "./CounterApp/reducer";
import rootReducer from "./rootReducer";
import TodoReducer from "./TodoListRedux/reducer";
import thunkMiddleware  from "redux-thunk";

// const store = createStore(CounterReducer)

const composedEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, composedEnhancer)
export default store