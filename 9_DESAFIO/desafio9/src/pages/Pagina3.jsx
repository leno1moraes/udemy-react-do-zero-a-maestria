import React, { useEffect } from 'react'
import './Pagina3.css'

const Pagina3 = () => {
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
        <div>
            <p><h1>Página 3</h1></p>
        </div>
    </>
  )
}

export default Pagina3