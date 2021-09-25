import React from 'react'

export default function Button(props) {
  const books = useSelector(books => books.state) //fungsi state management

  const getUserApi = () => {

  }

  return (
    <div onClick={books.klik}>
      Button
    </div>
  )
}