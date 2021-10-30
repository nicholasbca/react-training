import React, {useState, useEffect} from 'react'

export default function TodoListBasic() {
  const [taskValue, setTaskValue] = useState('')
  const [todos, setTodos] = useState([])
  const baseUrl = 'http://localhost:3004/todolists'
  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }

  console.log(taskValue);

  console.log(todos);

  useEffect(() => {
    getData()
  }, [])


  const getData = async()=> {
    try {
      await fetch(baseUrl)
      .then(res => res.json())
      .then(data => setTodos(data))
    } catch (error) {
      console.log(error);
    }
  }

  const postData = async() => {
    try {
      await fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          id:todos.length + 1,
          task: taskValue
        })
      }).then(res => res.json())
    } catch (error) {
      console.log(error);
    }
  }

  const delData = async(id) => {
    try {
      await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers
      })
    } catch (error) {
      console.log(error);
    }
  }

  const addTask = (e) => {
    e.preventDefault()
    postData()
    setTodos([
      ...todos, {
      id: todos.length + 1,
      task: taskValue
    }])
    setTaskValue('')
  }

  const delTask = (id) => {
    const newTodos = todos.filter(item => item.id !==id)
    setTodos(newTodos)
    delData(id)
  }

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
                <button onClick={() => delTask(item.id)}>Del</button>
              </span>
            </li>
          </div> 
        ))}
        </ul>
      </div>
    </div>
  )
}
