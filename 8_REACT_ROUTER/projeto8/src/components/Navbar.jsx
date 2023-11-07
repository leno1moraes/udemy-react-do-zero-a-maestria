import React from 'react'
import './Navbar.css';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Soubre</Link>
        </nav>
    </>
  )
}

export default Navbar