import React from 'react'
import { Link } from 'react-router-dom'
import { Chart } from 'react-google-charts'

import docImg from '../../assets/documento.png'
import coracaoImg from '../../assets/coracao.png'
import trofeuImg from '../../assets/trofeu.png'
import menuImg from '../../assets/menu.png'

import './styles.css'

export default function Graphic() {
  return (
    <div className='teste-office'>
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
        <div className='office text-center'>
          <h1>Olá João,</h1>
          <h2>Investimentos</h2>
          <Chart
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
              ['FUNDO IMOBILIARIO', 33.33],
              ['POUPANÇA', 33.33],
              ['RENDA VÁRIAVEL', 33.33]
            ]}
            options={{
              title: 'Meus Investimentos',
              legend: {
                position: 'bottom',
              }
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <hr />
          <h1>Patrimônio: <br />R$ 3.400,00</h1>
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
