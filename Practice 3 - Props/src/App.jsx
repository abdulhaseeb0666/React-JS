import React from 'react'
import card from './components/cards.jsx'

var username, age, profession;
const App = () => {
    return (
      <>
        {card(username="Abdul Haseeb", age="22", profession="Web Developer")}
      </>
    )
}

export default App
