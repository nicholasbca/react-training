import React, { useState } from 'react'
import { useToken } from './helper/useToken'
import axios from 'axios'
import { data } from 'autoprefixer'

export default function SignUpPage() {
  const [token, setToken] = useToken()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const headers = {
    'Access-Control-Allow-Origin' : '*',
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
};

  const OnClickSigned = () => {
    const res = axios.post('http://localhost:8080/api/signup', headers,{
      email: emailValue,
      password: passwordValue
    })
    const dataa = res.data
    // const token = dataa.token 
    const {token} = dataa //desctructuring javascript e6
    setToken(token)
  }

  return (
    <div>
      <input 
        type="email"
        placeholder="masukan email anda"
        onChange={e => setEmailValue(e.target.value)}
        value={emailValue}
      />
      <input 
        type="password"
        placeholder="masukan password"
        onChange={e => setPasswordValue(e.target.value)}
        value={passwordValue}
      />
      <hr />
      <button onClick={OnClickSigned}>Sign Up</button>
    </div>
  )
}
