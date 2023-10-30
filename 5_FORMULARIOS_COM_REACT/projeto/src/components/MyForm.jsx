import React from 'react'
import './MyForm.css'

import { useState } from 'react'

const MyForm = () => {
  const [botaoVisivel, setBotaoVisivel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBotaoVisivel(true);
  }

  const handleCancelar = (e) => {
    setBotaoVisivel(false);
  }

  return (
    <>
    <div className='myPanel'>
        
        {botaoVisivel && (
        <button className='btn-retorno-sucesso'>Dados enviados com sucesso</button>
        )}

        <form className='myForm' onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input type="text" name='name' placeholder='Digite o nome' />
            </label>
            <label>
                <span>E-mail: </span>
                <input type="email" name='email' placeholder='Digite o e-mail' />
            </label>      
            <label>
                <span className='span-descricao'>Descrição: 
                <textarea name="bio" id="" cols="20" rows="10" placeholder='Descrição do usuário'></textarea>
                </span>
            </label> 
            <div className='button-container'>
                <input type="submit" className='btn-enviar' value="Enviar" />     
                <input type="button" className='btn-cancelar' value="Cancelar" onClick={handleCancelar} />   
            </div>         
        </form>
    </div>
    </>
  )
}

export default MyForm