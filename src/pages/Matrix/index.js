import React from 'react'
import { Link } from 'react-router-dom'

import morpheusImg from '../../assets/matrix-morpheus.png'

import './styles.css'

export default function Matrix () {
  return (
    <div className='teste-matrix'>
      <div className='container fluid'>
        <div className='matrix text-center'>
          <h1>Quer participar do ranking de investidores?</h1>
          <div className='row'>
            <div className='col align-self-center'>
              <Link to='/ranking'>
                <button type='submit' className='btn colorv'>SIM</button>
              </Link>
            </div>
            <div className='col align-self-center'>
              <img src={morpheusImg} className='img-fluid' />
            </div>
            <div className='col align-self-center'>
              <Link to='office'>
                <button type='submit' className='btn colorb'>NÃO</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
