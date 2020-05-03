import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'
import caixaImg from '../../assets/caixa.png'
import { ProgressBar } from 'react-bootstrap'

import './styles.css'

export default function Question() {
  const now = 10
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
          <h1>Olá Jão, sejá bem vindo!</h1>
          <h2>Responda ao questionario para definir seu perfil de investidor.</h2>
          <img src={caixaImg} className='img-fluid' />
          <h2>Por quanto tempo você pretende deixar seu dinheiro investido?</h2>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>Menos de 6 meses</button>
            </div>
            <div className="col-sm">
              <button className='btn'>6 meses e 1 ano</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button className='btn'>1 ano e 3 anos</button>
            </div>
            <div className="col-sm">
              <button className='btn'>+ 3 anos</button>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
