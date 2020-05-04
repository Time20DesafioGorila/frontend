import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import youinvest from '../../assets/youinvest.png'

export default function Home() {
  return (
    <div className='container fluid'>
      <div className='home text-center'>
        <img src={youinvest} className='img-fluid' />
        <h1>Seja Bem Vindo <br /> Investidor!</h1>
        <Link to='/logon'>
          <h2>FAÇA SEU LOGON</h2>

        </Link>
        <Link to='/new_account'><p>Não tenho cadastro? <br /> Cria uma conta.</p></Link>
      </div>
    </div>
  )
}
