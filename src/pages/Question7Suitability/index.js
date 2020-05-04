import React from 'react'
import { Link } from 'react-router-dom'

import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

export default function Question () {
  const now = 70
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Em relação as aplicações e rendimentos, em qual dessas situações você se enquadra?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-8-suitability'>
                <button className='btn'>
                  Conto com o rendimento dessas aplicações para complementar minha renda mensal.
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-8-suitability'>
                <button className='btn'>
                  Posso resgatar parte das aplicações para fazer frente aos
                  meus gastos. Contudo, não tenho intenção de resgatar no curto prazo e
                  pretendo fazer aplicações regulares.
                </button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-8-suitability'>
                <button className='btn'>
                  Não tenho intenção de resgatar no curto prazo, mas não pretendo realizar novas aplicações.
                </button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-8-suitability'>
                <button className='btn'>
                  Não tenho intenção de resgatar no curto prazo e ainda pretendo fazer
                  aplicações regulares.
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
