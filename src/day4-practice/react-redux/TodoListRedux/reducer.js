import { ADD_TODO, GET_TODO } from "./actions";

const intitialState = {
  todos: [] //bentuknya array
}

const TodoReducer = (state = intitialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.newTodo
          }
        ]
      }
  
    default:
      return state
  }
}

export default TodoReducer