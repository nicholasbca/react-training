import React, {Fragment, useState} from 'react'
import TitleComponent from '../inline/TitleComponent'
import ButtonKlik from './Button'

export default function TransferApp() {
  const [balance, setBalance] = useState(0)

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
    </Fragment>
  )
}
