import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CounterAppRedux() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
    </div>
  )
}
