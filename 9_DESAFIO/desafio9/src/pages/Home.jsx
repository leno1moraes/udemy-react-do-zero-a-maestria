import React, { useEffect } from 'react'
import './Home.css'
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

const Home = () => {
    const { counter } = useContext(CounterContext);

    useEffect(() => {
        // Add the class to the body when the component mounts
        document.body.classList.add('bg-pagina-home');
    
        // Clean up the class when the component unmounts
        return () => {
          document.body.classList.remove('bg-pagina-home');
        };
      }, []);

  return (
    <>
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter/>
        </div>
    </>
  )
}

export default Home