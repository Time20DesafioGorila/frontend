import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'
import morpheusImg from '../../assets/matrix-morpheus.png'

import './styles.css'

export default function Matrix() {
  return (
    <div className='teste-matrix'>
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

        <div className='matrix text-center'>
          <h1>Quer participar do ranking de investidores?</h1>
          <div className='row'>
            <div className='col align-self-center'>
              <button type='submit' className='btn colorv'>SIM</button>
            </div>
            <div className='col align-self-center'>
              <img src={morpheusImg} className='img-fluid' />
            </div>
            <div className='col align-self-center'>
              <button type='submit' className='btn colorb'>NÃO</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
