import React from 'react'
import caixaImg from '../../assets/caixa.png'
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Question () {
  const now = 10
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <h1>Olá Jão, sejá bem vindo!</h1>
          <h2>Responda ao questionario para definir seu perfil de investidor.</h2>
          <img src={caixaImg} className='img-fluid' />
          <h2>Por quanto tempo você pretende deixar seu dinheiro investido?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-2-suitability'>
                <button className='btn'>Menos de 6 meses</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-2-suitability'>
                <button className='btn'>6 meses e 1 ano</button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-2-suitability'>
                <button className='btn'>1 ano e 3 anos</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-2-suitability'>
                <button className='btn'>+ 3 anos</button>
              </Link>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
