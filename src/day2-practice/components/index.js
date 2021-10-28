import React, {Fragment, useEffect, useState} from 'react'
import TitleComponent from '../inline/TitleComponent'
import ButtonKlik from './Button'

export default function TransferApp() {
  const [balance, setBalance] = useState(0)
  const [members, setMembers] = useState([])
  const [nohp, setNohp] = useState([])
  const [users, setUsers] = useState([])

  const getUser = async () =>{
    try {
      const raw = await fetch('http://jsonplaceholder.typicode.com/users')
      const data = await raw.json()
      // console.log(data)
      const names = data.map(a => a.name) //ini manggil property name
      const phones = data.map(a => a.phone)
      setMembers(names)
      setNohp(phones)
      setUsers(data)
      // const names = 
    } catch (error) {
      console.log('Data Error')
    }
  }

  useEffect(() => {
    // loadUser()
  }, [])

  const loadUser = () => {
    setTimeout(() => {
      alert('load data')
      getUser()
    }, 5000)
  }

  console.log('nama kontak', members)
  console.log('no hp kontak', nohp)

  const save1000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance+value}`)
    }, 1200)
  }

  const save5000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance+value}`)  
    }, 1500);
  }

  const withdrw1000 = (value) => {
    const confirmation = window.confirm('apakah anda yakin?')
    if(balance > 0 ){
      if(confirmation){
        setBalance(balance - value)
        alert(`Saldo anda berkurang ${value}, sekarang jadi ${balance-value}`)
      } else {
        alert('OK, gajadi')
      }
    } else {
      alert('Saldo ndak Cukup')
    }
  }

  return (
    <Fragment>
      <div className="bg-gray-100 rounded-xl p-8 mt-10 mb-10 mx-80">
      <TitleComponent text={`Saldo anda adalah : Rp. ${balance}`} /> 
      {/* Saldo anda adalah : Rp. {balance} */}
      <br />
      <hr />
      Apakah mau tambah saldo?
      <br />
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => save1000(1000)}>Tambah Rp.1000</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => save5000(5000)}>Tambah Rp.5000</button>
      <hr />
      Apakah mau tarik saldo?
      <br/>
      {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
      <ButtonKlik klik={() => withdrw1000(1000)} text={"Tarik Rp. 1000"} color={"Red"}/>
      <div className="space-y-4 mt-8">
        {users.map((user, id) => (
          <span className="bg-blue-200 block rounded-md" key={id}>{user.name} {user.phone}</span>
        ))}
      </div>
      </div>
    </Fragment>
  )
}
