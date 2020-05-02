import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Home () {
  return (
    <div className='home-teste'>
      <div className='container fluid'>
        <div className='logon-welcome text-center'>
          <h1>Seja Bem Vindo <br /> Investidor!</h1>
          <Link to='/logon'>
            <h2>FAÇA SEU LOGON</h2>
          </Link>
          <Link to='/new_account'><p>Não tenho cadastro? <br /> Cria uma conta.</p></Link>
        </div>
      </div>
    </div>
  )
}
