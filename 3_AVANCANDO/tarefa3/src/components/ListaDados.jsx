import React from 'react'

import { useState } from 'react'

const ListaDados = () => {

    const [list] = useState(['Maria', 'Joana', 'Taia', 'Malia']);

    const [usuarios, setUsuarios] = useState([
        {id: 1, name: "Antônio", age: 31},
        {id: 2, name: "João", age: 32},
        {id: 3, name: "Pedro", age: 33},
    ]);

    const deletaRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsuarios((prevUsuarios) =>{
            return prevUsuarios.filter((usuarios) => randomNumber !== usuarios.id)
        });
    };

  return (
    <div>
        <h4>ListaDados</h4>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item} </li>
            ))}
        </ul>
        
        <ul>
            {usuarios.map((usuarios) =>(
                <li key={usuarios.id}> 
                {usuarios.name} - {usuarios.age} </li>
            ))}
        </ul>

        <button onClick={deletaRandom}>Deletar usuário aletório</button>

    </div>
  )
}

export default ListaDados