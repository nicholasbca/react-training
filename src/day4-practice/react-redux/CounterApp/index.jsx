import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CounterAppRedux() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      dari redux
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
    </div>
  )
}
