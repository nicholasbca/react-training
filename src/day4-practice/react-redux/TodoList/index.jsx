import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getData } from './actions'

export default function TodoListRedux() {
  const [todoValue, setTodoValue] = useState('')
  const dispatch = useDispatch()
  const listTodos = useSelector(state => state.todos)

  console.log(listTodos);

  useEffect(() => {
    getData(dispatch)
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if(todoValue ==="") return;
    const newTodo = {
      id: Math.random(),
      task: todoValue
    }
    addTodo(dispatch, newTodo)
    setTodoValue("")
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          type="text"
          value={todoValue}
          onChange={e=> setTodoValue(e.target.value)}
          placeholder="Masukan todolist"
        />
        <button type="submit">Add</button>
      </form>
      <hr/>
      {listTodos.map((item, id) => (
        <ul>
          <li key={id}>{item.task}</li>
          <button onClick={item }>Delete</button>
        </ul>
      ))}
    </div>
  )
}
