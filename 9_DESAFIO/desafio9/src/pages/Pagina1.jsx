import React, { useEffect } from 'react'
import './Pagina1.css'
//[retirado] import { useContext } from 'react';
//[retirado] import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

//Refatorando com hooks
import { useCounterContext } from '../hooks/useCounterContext';

const Pagina1 = () => {
//[retirado]   const { counter } = useContext(CounterContext);
const { counter } = useCounterContext();

  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('bg-pagina-1');

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-pagina-1');
    };
  }, []);

  return (
    <>
        <div className='bg-body-page'>
            <h1>Página 1</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    </>
  )
}

export default Pagina1