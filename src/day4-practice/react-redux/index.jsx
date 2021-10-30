import React from 'react'
import { Provider } from 'react-redux'
import CounterAppRedux from './CounterApp'
import store from './store'
import TodoListRedux from './TodoListRedux'

export default function ReactRedux() {
  return (
    <Provider store={store}>
      <TodoListRedux />
    </Provider>
  )
}
