import { useState, useEffect } from 'react'
import './App.css'


//A - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//B -pages
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <>
      <div>
        
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/home' element={<Home />} ></Route>
              <Route path='/about' element={<About />} ></Route>
            </Routes>
          </BrowserRouter>
        </div>

      </div>
    </>
  )
}

export default App
