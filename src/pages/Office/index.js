import React from 'react'
import { Link } from 'react-router-dom'

import docImg from '../../assets/documento.png'
import coracaoImg from '../../assets/coracao.png'
import trofeuImg from '../../assets/trofeu.png'
import menuImg from '../../assets/menu.png'

import './styles.css'

export default function Office() {
  return (
    <div className='teste-office'>
      <div className='container fluid'>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">Menu</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={menuImg} className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Perfil<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Desafios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ranking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Indique Amigos</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='office text-center'>
          <h1>Olá João,</h1>
          <h2>Adicionar Investimento</h2>
          <div className='table-responsive-xl'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>OPÇÔES</th>
                  <th scope='col'>Qnt</th>
                  <th scope='col'>Preço</th>
                  <th scope='col'>Total</th>
                  <th scope='col'>Rentabilidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>RENDA VÁRIAVEL</th>
                  <th scope='col'>2</th>
                  <th scope='col'>R$ 85,85</th>
                  <th scope='col'>R$ 171,7‬</th>
                  <th scope='col' className='color-table-verde'>+ 20%</th>
                </tr>
                <tr>
                  <th scope='row'>FUNDO IMOBILIARIO</th>
                  <th scope='col'>2</th>
                  <th scope='col'>R$ 85,85</th>
                  <th scope='col'>R$ 171,7‬</th>
                  <th scope='col' className='color-table-verde'>+ 15%</th>
                </tr>
                <tr>
                  <th scope='row'>POUPANÇA</th>
                  <th scope='col'>2</th>
                  <th scope='col'>R$ 85,85</th>
                  <th scope='col'>R$ 171,7‬</th>
                  <th scope='col' className='color-table-vermelho'>- 40%</th>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to='/graphic'>
            <button type='submit' className='btn'>ATUALIZAR</button>
          </Link>
          <div className='row'>
            <div className='col'>
              <img src={docImg} className='img-fluid' />
              <p>Carteira</p>
            </div>
            <div className='col'>
              <img src={coracaoImg} className='img-fluid' />
              <p>+ ou -</p>
            </div>
            <div className='col'>
              <img src={trofeuImg} className='img-fluid' />
              <p>Competição</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
