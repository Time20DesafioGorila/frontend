import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Logon () {
  return (

    <div className='teste-logon'>
      <div className='container fluid'>
        <div className='home text-center'>
          <div className='row'>
            <div className='col'>
              <h1 className='text-center'>Logon:</h1>
              <form className=''>
                <label Htmlfor='email'>Email</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='email' className='form-control' id='email' />
                </div>
                <label Htmlfor='password'>Senha</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='password' className='form-control' id='password' />
                </div>
                <Link to='/office'>
                  <button className='btn'>Entrar</button>
                </Link>
              </form>
              <Link to='/new_account'>
                <p>Não tenho cadastro?<br />Cria uma conta.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
