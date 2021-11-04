const initState = {
  todos: []
}

const TodoReducer = (state=initState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "ADD":
      return{
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            todo: action.payload.newTodo
          }
        ]
      }
    case "DEL":
      const deleteFilter = state.todos.filter(item => item.id !== action.payload)
      return{
        ...state,
        todos: deleteFilter
      }
    case "LOAD":
      return{
        ...state,
        todos: action.payload
      }
  
    default:
      return state
  }
}

export default TodoReducer