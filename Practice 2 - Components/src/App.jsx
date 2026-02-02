import React from 'react'
import card from './components/cards.jsx'
import Navbar from './components/navbar.jsx'
const App = () => {
    return (
      <>
        {Navbar()}
        <div className="card">
          <h1 id="title">Abdul Haseeb</h1>
          <p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptas laborum excepturi nisi voluptatibus quo ipsum commodi. Impedit qui veritatis ab eaque perferendis, consequuntur distinctio, explicabo, ipsa porro nemo doloremque!</p>
        </div>
        {card()}
      </>
    )
}

export default App
