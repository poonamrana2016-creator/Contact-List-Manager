import React, { useState, createContext } from 'react';
export const ThemeContext = createContext('light');

const Themeprovider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <>

            <ThemeContext.Provider value={ {theme, setTheme} } >
                {children}
            </ThemeContext.Provider>

        </>
    )
}

export default Themeprovider