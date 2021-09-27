import React, {useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { deleteUser, getUsers } from '../../api/usersData'

export default function About() {
  const [state, setstate] = useState(initialState)
  useEffect(() => {
    console.log()
    return () => {
      cleanup
    }
  }, [input])
  return (
    <div>
      <Header/>
      <Footer copyright={'By ...'}/>
    </div>
  )
}
