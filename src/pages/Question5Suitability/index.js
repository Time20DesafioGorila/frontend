import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'
import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

import './styles.css'

export default function Question() {
  const now = 50
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
          <h2>Caso as suas aplicações sofressem uma queda superior a 30%, o que você faria? </h2>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>Resgataria toda a aplicação.</button>
            </div>
            <div className="col-sm">
              <button className='btn'>Manteria aplicação aguardando uma melhora do mercado.</button>
            </div>
            <div className="col-sm">
              <button className='btn'>Aumentaria a aplicação para aproveitar as oportunidades do mercado.</button>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
