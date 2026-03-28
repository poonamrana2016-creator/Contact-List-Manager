import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useContext } from 'react';
// import { ThemeContext } from './Themeprovider';

const Navbar = () => {

    // const [theme, setTheme] = useContext(ThemeContext);

    // const handleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // }

    return (
        <>
            {/* Navbar Starts */}
            <nav className="navbar nav_bg ">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand project_title ms-5" >Contact Manager</Link>

                    <div className='ms-auto me-5'>
                        <button type='submit' className='btn btn-outline-warning ' >Switch Theme</button>
                    </div>
                </div>
            </nav>

            {/* Navbar Starts */}


        </>
    )
}

export default Navbar