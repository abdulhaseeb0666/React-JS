import React from 'react'
import { useState } from 'react'
import App from '../App'

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('Light')

    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ThemeContext
 