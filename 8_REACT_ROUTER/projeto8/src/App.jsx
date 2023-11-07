import { useState, useEffect } from 'react'
import './App.css'


//A - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//C - components
import Navbar from './components/Navbar';

//B -pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';



function App() {

  return (
    <>
      <div>
        
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/home' element={<Home />} ></Route>
              <Route path='/about' element={<About />} ></Route>
              {/**rota dinamica */}
              <Route path='/products/:id' element={<Product />} ></Route>
            </Routes>
          </BrowserRouter>
        </div>

      </div>
    </>
  )
}

export default App
