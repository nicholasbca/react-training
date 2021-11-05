export const ADD = "ADD"
export const DEL = "DEL"
export const GET = "GET"

export const addTodo = async (dispatch, newTodo) => {
  try {
    await fetch('http://localhost:3004/todolist',{
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }, newTodo)
    dispatch({
      type: "ADD",
      payload: newTodo
    })
  } catch (error) {
    console.log(error);
  }
}

export const getData = async() => {
  try {
    const res = await fetch('http://localhost:3004/todolists')
    const dataAPI = await res.json()
    console.log(dataAPI)
    ({
      type: "LOAD",
      payload: dataAPI
    })
  } catch (error) {
    console.log(error)
  }
} 