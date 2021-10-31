export const ADD_TODO = "ADD_TODO"
export const DEL_TODO = "DEL_TODO"
export const GET_TODO = "GET_TODO"

const baseUrl = 'http://localhost:3004/todolists'
  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }

export const getData = async()=> {
  try {
    const raw = await fetch(baseUrl)
    const dataAPI = await raw.json()
    console.log(dataAPI)
    ({
      type: GET_TODO,
      payload: dataAPI
    })
  } catch (error) {
    console.log(error);
  }
}

export const postData = async(dispatch, newTodo) => {
 try {
   await fetch(baseUrl, {
     method: "POST",
     headers
   }, newTodo)
   dispatch({
     type: ADD_TODO,
     payload: newTodo
   })
 } catch (error) {
   console.log(error)
 }
}