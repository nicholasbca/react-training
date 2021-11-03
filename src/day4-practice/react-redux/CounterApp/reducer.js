// action : {
//   type,
//   payload,
// }
const intitialState = {
  count: 11
}

const CounterReducer = (state=intitialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT": 
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

export default CounterReducer