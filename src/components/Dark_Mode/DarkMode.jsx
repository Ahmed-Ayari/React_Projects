import useLocalStorage from "./useLocalStorage"
import './style.css'

export default function DarkMode(){

    const[theme, setTheme] = useLocalStorage('theme', "dark")
    
    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }



    return (
        <div className="container" data-theme={theme}>
            <div className="dm_container">
                <p>Hello World !</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}