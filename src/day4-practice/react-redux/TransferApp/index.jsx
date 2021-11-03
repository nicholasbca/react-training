import React, { Fragment, useEffect, useState } from 'react'
import TitleComponent from '../../../day2-practice/inline/TitleComponent'
import ButtonKlik from '../../../day2-practice/components/Button'
import { useSelector, useDispatch } from 'react-redux'

export default function TransferAppRedux() {
    const uang = useSelector(state => state.uang)
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className="bg-gray-100 rounded-xl p-8 mt-10 mb-10 mx-80">
                <TitleComponent text={`Dari Redux. Saldo anda adalah : Rp. ${uang}`} />
                {/* Saldo anda adalah : Rp. {balance} */}
                <br />
                <hr />
                Apakah mau tambah saldo?
                <br />
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => dispatch({ type: "INCREMENT1" })}>Tambah Rp.1000</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => dispatch({ type: "INCREMENT2" })}>Tambah Rp.5000</button>
                <hr />
                Apakah mau tarik saldo?
                <br />
                {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
                <ButtonKlik klik={() => dispatch({ type: "DECREMENT" })} text={"Tarik Rp. 1000"} color={"Red"} />
            </div>
        </Fragment>
    )
}
