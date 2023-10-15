import React from 'react'

const ContainerDados = ({ children, meuValor }) => {
  return (
    <>
        <h4>ContainerDados</h4>
        <p>Conteúdo dentro</p>
        {children}
        <p><b>Valor é</b> {meuValor} </p>
    </>
  )
}

export default ContainerDados