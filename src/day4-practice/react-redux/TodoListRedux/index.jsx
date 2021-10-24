import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getData, postData } from './actions'

export default function TodoListRedux() {
  const [taskValue, setTaskValue] = useState('')
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getData(dispatch)
  }, [])

  // const postData = async() => {
  //   try {
  //     await fetch(baseUrl, {
  //       method: 'POST',
  //       headers,
  //       body: JSON.stringify({
  //         id:todos.length + 1,
  //         task: taskValue
  //       })
  //     }).then(res => res.json())
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const delData = async(id) => {
  //   try {
  //     await fetch(`${baseUrl}/${id}`, {
  //       method: "DELETE",
  //       headers
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const addTask = (e) => {
    e.preventDefault()
    // postData()
    const newTodo = {
      id: todos.length + 1,
      task: taskValue
    }
    postData(dispatch,newTodo)
    setTaskValue('')
  }

  // const delTask = (id) => {
  //   const newTodos = todos.filter(item => item.id !==id)
  //   setTodos(newTodos)
  //   delData(id)
  // }

  return (
    <div>
      <form onSubmit={addTask}>
        <input 
          type="text"
          placeholder="add your todos"
          value={taskValue}
          onChange={e => setTaskValue(e.target.value)}
        />  
        <button type="submit">Add</button>
      </form>
      <hr/> 
      <div>
       <ul>
        {todos.map((item) => (
          <div>
            <li key={item.id}>{item.task} 
              <span>
                {/* <button onClick={() => delTask(item.id)}>Del</button> */}
              </span>
            </li>
          </div> 
        ))}
        </ul>
      </div>
    </div>
  )
}
