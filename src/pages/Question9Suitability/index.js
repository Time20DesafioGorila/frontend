import React from 'react'
import { Link } from 'react-router-dom'

import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

export default function Question () {
  const now = 90
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Qual o valor aproximado do seu patrimônio?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/suitabilityresult'>
                <button className='btn'>
                  Até R$ 10.000
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/suitabilityresult'>
                <button className='btn'>
                  De R$ 10.000 até R$ 100.000
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/suitabilityresult'>
                <button className='btn'>
                  De R$ 100.000 até R$ 500.000
                </button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/suitabilityresult'>
                <button className='btn'>
                  De R$ 500.000 até R$ 1.000.000
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/suitabilityresult'>
                <button className='btn'>
                  Acima de R$ 1.000.000
                </button>
              </Link>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
