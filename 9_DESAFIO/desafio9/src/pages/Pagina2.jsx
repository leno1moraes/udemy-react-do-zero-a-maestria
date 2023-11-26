import React, { useEffect } from 'react'
import './Pagina2.css'

const Pagina2 = () => {
  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('bg-pagina-2');

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-pagina-2');
    };
  }, []);  
  
  return (
    <>
        <div>
            <p><h1>Página 2</h1></p>
        </div>
    </>
  )
}

export default Pagina2