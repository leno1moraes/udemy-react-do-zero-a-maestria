import React, { useEffect } from 'react'
import './Pagina1.css'

const Pagina1 = () => {
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
        <div>
            <p><h1>Página 1</h1></p>
        </div>
    </>
  )
}

export default Pagina1