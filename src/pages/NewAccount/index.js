import React from 'react'
import { Link } from 'react-router-dom'

import '../NewAccount/styles.css'

export default function NewAccount () {
  return (
    <div className='teste-new'>
      <div className='container fluid'>
        <div className='newaccount text-center'>
          <div className='row'>
            <div className='col'>
              <h1>Crie sua conta</h1>
              <form>
                <label Htmlfor='nome'>Nome</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='text' className='form-control' id='nome' />
                </div>
                <label Htmlfor='email'>Email</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='email' className='form-control' id='email' required />
                </div>
                <label Htmlfor='email'>Número Celular</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='tel' className='form-control' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' />
                </div>
                <label Htmlfor='password'>Password</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='password' className='form-control' />
                </div>
                <label Htmlfor='password_confirm'>Confirme o Password</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='password' className='form-control' id='password_confirm' />
                </div>
                <Link to='/office'>
                  <button type='submit' className='btn'>CADASTRAR</button>
                </Link>
              </form>
              <Link to='/new_account'>
                <p>FAÇA SEU LOGON</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
