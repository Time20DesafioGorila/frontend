import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'

import './styles.css'

export default function Suitability() {
  return (
    <div className='teste-suitability'>
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

        <div className='suitability text-center'>
          <h1>Teste de Suitability</h1>
          <h2>Avaliar o seu perfil de investidor.</h2>
          <Link>
            <button type='submit' className='btn'>COMEÇAR</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
