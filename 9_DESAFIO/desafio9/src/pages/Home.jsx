import React, { useEffect } from 'react'
import './Home.css'

const Home = () => {
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
            <p><h1>Home</h1></p>
        </div>
    </>
  )
}

export default Home