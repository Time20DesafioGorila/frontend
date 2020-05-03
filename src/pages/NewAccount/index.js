import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import '../NewAccount/styles.css'
import api from '../../services/api'

function NewAccount(props) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, password, confirmPassword, email, phone)
    const response = await api.post('/users', {
      name, password, confirmPassword, email, phone
    })

    setName('')
    setPassword('')
    setConfirmPassword('')
    setEmail('')
    setPhone('')

    props.history.push('/office');
  }

  return (
    <div className='teste-new'>
      <div className='container fluid'>
        <div className='newaccount text-center'>
          <div className='row'>
            <div className='col'>
              <h1>Crie sua conta</h1>
              <form onSubmit={e => handleSubmit(e)}>

                <label htmlFor='nome'>Nome</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input
                    type='text'
                    className='form-control'
                    id='nome'
                    vale={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <label htmlFor='email'>Email</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    vale={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
                </div>

                <label htmlFor='email'>Número Celular</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input
                    type='tel'
                    className='form-control'
                    // pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' // Depois deem uma olhada nesse pattern pra gente ver se melhora
                    vale={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>

                <label htmlFor='password'>Password</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input
                    type='password'
                    className='form-control'
                    vale={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <label htmlFor='password_confirm'>Confirme o Password</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input
                    type='password'
                    className='form-control'
                    id='password_confirm'
                    vale={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Link to='/suitability'>
                  <button type='submit' className='btn'>CADASTRAR</button>
                </Link>
              </form>

              <Link to='/logon'>
                <p>FAÇA SEU LOGON</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NewAccount);