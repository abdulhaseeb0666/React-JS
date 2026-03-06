import { useEffect, useState, type ReactNode } from "react"
import ThemeContextAPI  from "./ThemeContext"

const ThemeProvider = ({children} : {children: ReactNode}) => {

    const [isDark, setisDark] = useState(localStorage.getItem("isDark") === "true" ? true : false);

    function toggleTheme(){
        setisDark((prev) => !prev);
    }

    useEffect(() => {
        localStorage.setItem("isDark", isDark.toString());
        if(isDark){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }
    } , [isDark])

  return (
    <div>

        <ThemeContextAPI.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContextAPI.Provider>
      
    </div>
  )
}

export default ThemeProvider
