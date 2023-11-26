import { useState } from 'react'
import './App.css'


//A - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//C - components
import Navbar from './components/Navbar';

//B -pages
import Home from './pages/Home';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';

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
              <Route path='/pagina1' element={<Pagina1 />} ></Route>
              <Route path='/pagina2' element={<Pagina2 />} ></Route>
              <Route path='/pagina3' element={<Pagina3 />} ></Route>
            </Routes>            
          </BrowserRouter>
        </div>   

      </div>

    </>
  )
}

export default App
