import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'
import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

import './styles.css'

export default function Question () {
  const now = 70
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">Menu</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={menuImg} class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Perfil<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Desafios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ranking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Indique Amigos</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Em relação as aplicações e rendimentos, em qual dessas situações você se enquadra?</h2>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>
                Conto com o rendimento dessas aplicações para complementar minha renda mensal.
              </button>
            </div>
            <div className="col-sm">
              <button className='btn'>
                Posso resgatar parte das aplicações para fazer frente aos
                meus gastos. Contudo, não tenho intenção de resgatar no curto prazo e
                pretendo fazer aplicações regulares.
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>
                Não tenho intenção de resgatar no curto prazo, mas não pretendo realizar novas aplicações.
              </button>
            </div>
            <div className="col-sm">
              <button className='btn'>
                Não tenho intenção de resgatar no curto prazo e ainda pretendo fazer
                aplicações regulares.
              </button>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
