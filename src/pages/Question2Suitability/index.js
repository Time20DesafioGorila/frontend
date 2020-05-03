import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'
import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

import './styles.css'

export default function Question() {
  const now = 20
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
          <h2>Qual o objetivo desse investimento?</h2>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>Preservação do capital para não perder valor ao longo do tempo.</button>
            </div>
            <div className="col-sm">
              <button className='btn'>Aumento gradual do capital ao longo do tempo, assumindo riscos moderados.</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>Aumento do capital acima da taxa de retorno média do mercado, mesmo que isso implique assumir riscos de perdas elevadas.</button>
            </div>
            <div className="col-sm">
              <button className='btn'>Obter no curto prazo retornos elevados e significativamente acima da taxade retorno média do mercado, assumindo riscos elevados</button>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
