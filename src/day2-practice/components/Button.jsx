import React from 'react'

export default function ButtonKlik({klik, text, color}) {
  return (
    <button style={{background:color}} onClick={klik}>{text}</button>
  )
}
