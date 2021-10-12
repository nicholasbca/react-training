import React from 'react'
import { Provider } from 'react-redux'
import CounterAppRedux from './CounterApp'
import store from './store'
import TodoListRedux from './TodoList'

export default function ReactRedux() {
  return (
    <Provider store={store}>
      {/* <CounterAppRedux /> */}
      <TodoListRedux />
    </Provider>
  )
}
