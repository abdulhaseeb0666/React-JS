import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import { useContext } from "react"
import ThemeContextAPI from "../contexts/ThemeContext"

const ThemeButton = () => {

    const theme = useContext(ThemeContextAPI)

    if(!theme) return null

    const {isDark ,  toggleTheme} = theme;


  return (
    <div>
        <button onClick={toggleTheme}>
            {
                isDark ? 
                    <Moon className="text-gray-300 cursor-pointer hover:text-white" size={24} />
                :   <Sun className="text-gray-300 cursor-pointer hover:text-white" size={24} />
                
            }
        </button>
    </div>
  )
}

export default ThemeButton
