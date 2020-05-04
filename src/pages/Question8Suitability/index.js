import React from 'react'
import { Link } from 'react-router-dom'

import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

export default function Question () {
  const now = 80
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Qual sua faixa de renda mensal média?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-9-suitability'>
                <button className='btn'>
                  Até R$ 1.000
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-9-suitability'>
                <button className='btn'>
                  De R$ 1.000 até R$ 5.000
                </button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-9-suitability'>
                <button className='btn'>
                  De R$ 5.000 até R$ 10.000
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-9-suitability'>
                <button className='btn'>
                  Acima de R$ 10.000
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
