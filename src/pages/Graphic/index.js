import React from 'react'
import { Link } from 'react-router-dom'
import { Chart } from 'react-google-charts'

import docImg from '../../assets/documento.png'
import coracaoImg from '../../assets/coracao.png'
import trofeuImg from '../../assets/trofeu.png'
import menuImg from '../../assets/menu.png'
import youinvest from '../../assets/youinvest.png'

import './styles.css'

export default function Graphic() {
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
                <a class="nav-link">Carteira<span class="sr-only">(current)</span></a>
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
      <div className='graphic text-center'>
        <h1>Olá João!</h1>
        <div className='row'>
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
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#grafico">Gráfico</a>
              </li>
              <li class="nav-item">
                <Link to='/graphic2'>
                  <a class="nav-link">Patrimônio</a>
                </Link>
              </li>
            </ul>
          </div>
          <div class="card-body" id='grafico'>
            <h5 class="card-title">Gráfico</h5>
            <p class="card-text"> <Chart
              style={{
                maxWidth: 800,
                fontWeight: 'bold',
                fontSize: 45,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              width={'100%'}
              height={'300px'}
              chartType='PieChart'
              loader={<div>Loading Chart</div>}
              data={[
                ['Total', 'investments'],
                ['BCFF11 - FII BC FFII', 5],
                ['POUPANÇA', 1],
                ['BOVA11', 1]
              ]}
              options={{
                title: 'Meus Investimentos',
                legend: {
                  position: 'bottom',
                }
              }}
              rootProps={{ 'data-testid': '1' }}
            /></p>
          </div>
        </div>
        <hr />
      </div>
    </div>

  )
}
