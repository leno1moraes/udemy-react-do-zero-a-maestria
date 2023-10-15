import React from 'react'

const UseDetails = ({nome, idade, profissao}) => {
  return (
    <>
        { idade >= 18 && <p><b>Nome:</b>{nome} - <b>Idade:</b>{idade} - <b>Profissão:</b>{profissao} </p>}
    </>
  )
}

export default UseDetails