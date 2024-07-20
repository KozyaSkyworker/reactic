import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext";

interface UseThemeResult {
    toggleTheme: ()=>void,
    theme: Theme
}

export function useTheme(): UseThemeResult {
   const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newCurrentTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newCurrentTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newCurrentTheme)
    }

    return { theme: theme || Theme.LIGHT, toggleTheme}
}