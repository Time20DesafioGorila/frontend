import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'
import userImg from '../../assets/user.png'
import usermedioImg from '../../assets/usermedio.png'
import coroaImg from '../../assets/coroa.png'
import userpequenoImg from '../../assets/userpequeno.png'
import youinvest from '../../assets/youinvest.png'

import './styles.css'

export default function Ranking() {
  return (
    <div className='teste-ranking'>
      <div className='container fluid'>
        <nav class="navbar navbar-expand-lg">
          <Link to='/office'>
            <a class="navbar-brand">
              <img src={youinvest} className='img-fluid' width='200' />
            </a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={menuImg} class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse justify-content-sm-start mt-5" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/office'>
                  <a class="nav-link">Home<span class="sr-only">(current)</span></a>
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
                <Link to='/suitabilityresult'>
                  <a class="nav-link">Suitability</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='ranking text-center'>
          <div className='row coroa'>
            <div className='col'>
              <p>1</p>
              <img src={coroaImg} className='img-fluid' />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src={userImg} className='img-fluid' />
              <p className='nome-principal'>Jão</p>
              <p className='pontuacao'>2153</p>
            </div>
          </div>
          <div className='row'>
            <div className='col coroamedia'>
              <p>2</p>
              <img src={usermedioImg} className='img-fluid' />
              <p>Jão</p>
              <br />
              <p>2153</p>
            </div>
            <div className='col coroamedia'>
              <p>3</p>
              <img src={usermedioImg} className='img-fluid' />
              <p>Jão</p>
              <br />
              <p>2153</p>
            </div>
          </div>
          <div className='input-group mb-3'>
            <input type="text" className='form-control' />
          </div>
          <div className='colocacao'>
            <div className='row'>
              <p>4</p>
              <img src={userpequenoImg} className='img-fluid' />
              <div className='col'><p>Jão</p></div>
              <div className='col'><p>4000</p></div>
            </div>
          </div>
          <div className='colocacao'>
            <div className='row'>
              <p>5</p>
              <img src={userpequenoImg} className='img-fluid' />
              <div className='col'><p>Jão</p></div>
              <div className='col'><p>4000</p></div>
            </div>
          </div>
          <div className='colocacao'>
            <div className='row'>
              <p>6</p>
              <img src={userpequenoImg} className='img-fluid' />
              <div className='col'><p>Jão</p></div>
              <div className='col'><p>4000</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
