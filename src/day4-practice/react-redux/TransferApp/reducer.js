// action : {
//   type,
//   payload,
// }
const intitialState = {
    uang: 10000
}

const UangReducer = (state = intitialState, action) => {
    switch (action.type) {
        case "INCREMENT1":
            return {
                uang: state.uang + 1000
            }
        case "INCREMENT2":
            return {
                uang: state.uang + 5000
            }
        case "DECREMENT":
            return {
                uang: state.uang - 1000
            }
        default:
            return state
    }
}

export default UangReducer