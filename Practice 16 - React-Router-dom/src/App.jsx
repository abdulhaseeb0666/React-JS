import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='main-page'>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/contact' element={<Contact />}  />
        </Routes>
      </div>
    </div>
  )
}

export default App
