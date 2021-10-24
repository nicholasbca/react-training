//types actions
export const ADD_TODO = "ADD_TODO"
export const DEL_TODO = "DEL_TODO"
export const GET_TODO = "GET_TODO"

const baseUrl = 'http://localhost:3004/todolists'
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' : '*',
}

export const getData = async()=> {
  try {
    const raw = await fetch(baseUrl, {
      headers
    })
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

export const postData = async(newTodo) => {
 try {
   await fetch(baseUrl, {
     method: "POST",
     headers,

   }, newTodo)
   ({
     type: ADD_TODO,
     payload: newTodo
   })
 } catch (error) {
   console.log(error)
 }
}

// fetch('http://localhost:8080/api/todolist',{
//   method: 'POST',
//   headers : {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin' : '*',
//   },
//   body: JSON.stringify({
//     email: 'emailValue',
//     password: 'passwordValue'
//   })
// })