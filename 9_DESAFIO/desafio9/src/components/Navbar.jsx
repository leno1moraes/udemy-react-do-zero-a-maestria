import React from 'react'
import './Navbar.css';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pagina1">Pagina 1</Link>
            <Link to="/pagina2">Pagina 2</Link>
            <Link to="/pagina3">Pagina 3</Link>
        </nav>
    </>
  )
}

export default Navbar