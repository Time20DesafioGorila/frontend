import React from 'react'
import { Link } from 'react-router-dom'

import docImg from '../../assets/documento.png'
import coracaoImg from '../../assets/coracao.png'
import trofeuImg from '../../assets/trofeu.png'
import menuImg from '../../assets/menu.png'
import youinvest from '../../assets/youinvest.png'

import './styles.css'

export default function Office() {
  return (

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

      <div className='office text-center'>
        <h1>Olá João!</h1>
        <div className='row'>
          <div className='col'>
            <Link to='/graphic'>
              <img src={docImg} className='img-fluid' />
              <p>Gráfico da Carteira</p>
            </Link>
          </div>
          <div className='col'>
            <Link to='/addinvest'>
              <img src={coracaoImg} className='img-fluid' />
              <p>Adicionar Investimento</p>
            </Link>
          </div>
          <div className='col'>
            <Link to='/matrix'>
              <img src={trofeuImg} className='img-fluid' />
              <p>Ranking</p>
            </Link>
          </div>
        </div>
        <h2>Investimentos</h2>
        <div className='table-responsive-xl table-striped table-bordered'>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>Nome</th>
                <th scope='col'>Quant.</th>
                <th scope='col'>Preço</th>
                <th scope='col'>Total</th>
                <th scope='col'>Rentabilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>BOVA11</th>
                <th scope='col'>1</th>
                <th scope='col'>R$ 77,21</th>
                <th scope='col'>R$ 77,21</th>
                <th scope='col' className='color-table-verde'>+ 20%</th>
              </tr>
              <tr>
                <th scope='row'>BCFF11 - FII BC FFII</th>
                <th scope='col'>5</th>
                <th scope='col'>R$ 85,13</th>
                <th scope='col'>R$ 425,65‬</th>
                <th scope='col' className='color-table-verde'>+ 15%</th>
              </tr>
              <tr>
                <th scope='row'>POUPANÇA</th>
                <th scope='col'>1</th>
                <th scope='col'>R$ 85,85</th>
                <th scope='col'>R$ 85,85‬</th>
                <th scope='col' className='color-table-vermelho'>- 40%</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
