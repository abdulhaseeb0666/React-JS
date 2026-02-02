import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <>
      <nav>
        <h1 id="nav-title">Vite</h1>
          <div class="nav-items">
            <a id="home" href="#">Home</a>
            <a id="about"href="#">About</a>
            <a id="contact"href="#">Contact</a>
          </div>
        <img id="vite-logo" src="./../public/vite.svg" alt=" Vite logo" width="40px" />
      </nav>
    </>
  )
}

export default navbar
