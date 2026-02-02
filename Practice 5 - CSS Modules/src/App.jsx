import React from 'react'
import button from './components/button/button.jsx'
import header from './components/header/header.jsx'

const App = () => {
  return (
    <div>
      {header()}
      {button()}
    </div>
  )
}

export default App
