import React, { useEffect } from 'react'
import './Pagina3.css'
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Pagina3 = () => {
  const { counter } = useContext(CounterContext);

  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('bg-pagina-3');

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-pagina-3');
    };
  }, []);

  return (
    <>
        <div className='bg-body-page'>
            <h1>Página 3</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    </>
  )
}

export default Pagina3