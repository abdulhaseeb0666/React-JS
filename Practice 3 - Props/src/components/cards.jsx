import './cards.css'
import React from 'react';
function card(name, age, profession) {
  return (
      <>
        <div className="card">
          <h1 id="name">{name}</h1>
          <p id="age">{age}</p>
          <p id="profession">{profession}</p>
          <p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptas laborum excepturi nisi voluptatibus quo ipsum commodi. Impedit qui veritatis ab eaque perferendis, consequuntur distinctio, explicabo, ipsa porro nemo doloremque!</p>
        </div>
      </>
    )
}

export default card;