import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import Footer from './components/Footer.jsx'
import NotFound from './pages/NotFound.jsx';
import MenProducts from './pages/MenProducts.jsx';
import WomenProducts from './pages/WomenProducts.jsx';
import KidProducts from './pages/KidProducts.jsx';
import Courses from './pages/Courses.jsx';
import CoursesDetails from './pages/CoursesDetails.jsx';
import PageNavigation from './components/PageNavigation.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='relative h-[90vh]'>     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CoursesDetails />} />
          <Route path='/products' element={<Products />} >
            <Route path='men' element={<MenProducts />} />
            <Route path='women' element={<WomenProducts />} />
            <Route path='kids' element={<KidProducts />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <PageNavigation />
      <Footer />      
    </div>
  )
}

export default App
