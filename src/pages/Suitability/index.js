import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Suitability () {
  return (
    <div className='teste-suitability'>
      <div className='container fluid'>
        <div className='suitability text-center'>
          <h1>Teste de Suitability</h1>
          <h2>Avaliar o seu perfil de investidor.</h2>
          <Link to='/question-1-suitability'>
            <button type='submit' className='btn'>COMEÇAR</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
