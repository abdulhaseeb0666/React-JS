import { createContext } from "react";

type ThemeContsextType = {
    isDark: boolean,
    toggleTheme: () => void
}

const ThemeContextAPI = createContext<ThemeContsextType | null>(null);  

export default ThemeContextAPI;