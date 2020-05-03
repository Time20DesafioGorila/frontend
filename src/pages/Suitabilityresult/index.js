import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'

import './styles.css'

export default function Suitabilityresult() {
  return (
    <div className='teste-suitabilityresult'>
      <div className='container fluid'>
        <nav class="navbar navbar-expand-lg">
          <Link to='/office'>
            <a class="navbar-brand">You invest</a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={menuImg} class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/office'>
                  <a class="nav-link">Perfil<span class="sr-only">(current)</span></a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/desafios'>
                  <a class="nav-link">Desafios</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/matrix'>
                  <a class="nav-link">Ranking</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/friends'>
                  <a class="nav-link">Indique Amigos</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/suitability'>
                  <a class="nav-link">Suitability</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='suitabilityresult text-center'>
          <p>Seu perfil é:</p>
          <h1>Conservador</h1>
          <p>Esse tipo de investidor prioriza a segurança em suas aplicações.</p>
          <p>Em sua diversificação de investimentos, o conservador deve manter <br /> a maior parte da sua carteira de investimentos em produtos de baixo risco.</p>
          <h1>Investimentos para seu perfil</h1>
          <p>Tesouro Direto<br /> CDB<br /> LC<br /> LCI/LCA<br /> Fundos de renda fixa</p>
          <p>Refazer o teste:</p>
          <Link to='/suitability'>
            <button type='submit' className='btn'>teste de perfil de investidor</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
