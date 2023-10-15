import React from 'react'

import { useState } from 'react';

const GerenciarDados = () => {
    let dado1 = 10;
    console.log(dado1);

    const [numero, setarNumero] = useState(25);
  return (
    <div>
        <h4>GerenciarDados</h4>

        <div>
            <p>Valor: {dado1}</p>
            <button onClick={() => (dado1 = 23)} >Mudar variável</button>
        </div>
        
        <div>
            <p>Valor dinâmico: {numero}</p>
            <button onClick={() => setarNumero(100)} >Mudar o state</button>
        </div>
        
    </div>

  )
}

export default GerenciarDados