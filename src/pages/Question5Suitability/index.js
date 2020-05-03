import React from 'react'
import { Link } from 'react-router-dom'

import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

import './styles.css'

export default function Question () {
  const now = 50
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Caso as suas aplicações sofressem uma queda superior a 30%, o que você faria? </h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-6-suitability'><button className='btn'>Resgataria toda a aplicação.</button></Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-6-suitability'><button className='btn'>Manteria aplicação aguardando uma melhora do mercado.</button></Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-6-suitability'><button className='btn'>Aumentaria a aplicação para aproveitar as oportunidades do mercado.</button></Link>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
