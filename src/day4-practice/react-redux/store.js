import { createStore } from "redux";
// import CounterReducer from "./CounterApp/reducer";
import UangReducer from "./TransferApp/reducer";

const store = createStore(UangReducer)

export default store