import React from 'react'
import { Link } from 'react-router-dom'

import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

export default function Question () {
  const now = 40
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Considerando seus rendimentos regulares, qual a porcentagem você pretende reservar para aplicações financeiras?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-5-suitability'><button className='btn'>No máximo 25%</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-5-suitability'><button className='btn'>Entre 25% e 50%</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-5-suitability'><button className='btn'>Acima de 50%</button>
              </Link>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
