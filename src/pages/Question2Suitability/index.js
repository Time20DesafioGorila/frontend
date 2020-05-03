import React from 'react'
import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Question() {
  const now = 20
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Qual o objetivo desse investimento?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-3-suitability'>
                <button className='btn'>Preservação do capital para não perder valor ao longo do tempo.</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-3-suitability'>
                <button className='btn'>Aumento gradual do capital ao longo do tempo, assumindo riscos moderados.</button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-3-suitability'>
                <button className='btn'>Aumento do capital acima da taxa de retorno média do mercado, mesmo que isso implique assumir riscos de perdas elevadas.</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-3-suitability'>
                <button className='btn'>Obter no curto prazo retornos elevados e significativamente acima da taxade retorno média do mercado, assumindo riscos elevados</button>
              </Link>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
