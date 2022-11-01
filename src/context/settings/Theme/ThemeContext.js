import React, {useContext, useState} from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

function ThemeProvider( {children }) {
    
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;