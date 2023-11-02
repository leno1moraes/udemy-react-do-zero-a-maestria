import React from 'react'
import './StartScreeen.css'

const StartScreeen = ({ startGame }) => {
  return (
    <>
      <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>começar a jogar</button>
      </div>
    </>
  )
}

export default StartScreeen