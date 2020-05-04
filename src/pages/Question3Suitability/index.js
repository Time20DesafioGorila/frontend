import React from 'react'
import objetivoImg from '../../assets/objetivo.png'
import { ProgressBar } from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default function Question () {
  const now = 30
  return (
    <div className='teste-question'>
      <div className='container fluid'>
        <div className='question text-center'>
          <p>Perfil de Investidor</p>
          <img src={objetivoImg} className='img-fluid' />
          <h2>Qual das alternativas melhor classifica sua formação e experiência como mercado Financeiro?</h2>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-4-suitability'>
                <button className='btn'>Não possuo formação acadêmica ou conhecimento do mercado Financeiro.</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-4-suitability'>
                <button className='btn'>Possuo formação acadêmica na área Financeira, mas não tenho experiência com o mercado Financeiro.</button>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <Link to='/question-4-suitability'>
                <button className='btn'>Possuo formação acadêmica em outra área, mas possuo conhecimento do mercado Financeiro.</button>
              </Link>
            </div>
            <div className='col-sm'>
              <Link to='/question-4-suitability'>
                <button className='btn'>Possuo formação acadêmica na área financeira ou pleno conhecimento do mercado Financeiro.</button>
              </Link>
            </div>
          </div>
          <ProgressBar className='progressBar' now={now} label={`${now}%`} variant='success' />
        </div>
      </div>
    </div>
  )
}
