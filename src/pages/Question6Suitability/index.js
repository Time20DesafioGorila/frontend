import React from 'react'
import { Link } from 'react-router-dom'
import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

export default function Question () {
  const now = 60
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Como está distribuído o seu patrimônio?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-7-suitability'>
                <button className='btn'>
                  Meu patrimônio não está aplicado ou está todo aplicado em renda fixa e/ou imóveis
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-7-suitability'>
                <button className='btn'>
                  Menos de 25% em renda variável e o restante em renda fixa e/ou imóveis.
                </button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-7-suitability'>
                <button className='btn'>
                  Entre 25% e 50% aplicado em renda variável e o restante em renda fixa e/ou imóveis.
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-7-suitability'>
                <button className='btn'>
                  Acima de 50% em renda variável.
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
