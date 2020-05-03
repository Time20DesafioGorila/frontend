import React from 'react'
import { Link } from 'react-router-dom'

import menuImg from '../../assets/menu.png'

import './styles.css'

export default function Addinvest() {
  return (
    <div className='teste-addinvest'>
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
                <Link to='/suitabilityresult'>
                  <a class="nav-link">Suitability</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='addinvest text-center'>
          <h1 className='text-center'>Adicionar Investimento</h1>
          <form>
            <div className='row'>
              <div className='col-sm'>
                <label Htmlfor='produto'>Produto</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='text' className='form-control' id='produto' />
                </div>
              </div>
              <div className='col-sm'>
                <label Htmlfor='quant'>Quantidade</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='text' className='form-control' id='quant' />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <label Htmlfor='preco'>Preço</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='text' className='form-control' id='preco' />
                </div>
              </div>
              <div className='col-sm'>
                <label Htmlfor='preco'>Data da Compra</label><br />
                <div className='form-group d-flex justify-content-center'>
                  <input type='date' className='form-control' id='preco' />
                </div>
              </div>
            </div>
            <Link to='/office'>
              <button className='btn'>Salvar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
