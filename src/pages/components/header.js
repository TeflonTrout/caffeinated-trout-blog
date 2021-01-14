import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import headerStyles from './header.module.css'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata{
    //                 title
    //             }
    //         }
    //     }
    // `)

    const [navbarState, setNavbarState] = useState(false)
        
    const navbarToggle = (e) => {
        setNavbarState(prevState => !prevState)
    };

    const handleKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            return ""
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <div className={headerStyles.navbarContainer}>
                        <h1 className={headerStyles.headingTitle}>Caffeinated Trout</h1>
                        <div 
                            style={{outline: 'none'}}
                            className={headerStyles.hamburger}
                            role="navigation" 
                            tabIndex={0} 
                            onClick={(e) => navbarToggle()} 
                            onKeyDown={(ev) => handleKeyDown()}>
                            <FaBars />
                        </div>
                    </div>
                    {navbarState ? 
                    <div>
                        <ul className={headerStyles.ul}>
                            <li className={headerStyles.li}>
                                <Link className={headerStyles.link} to='/'>Home</Link>
                            </li>
                            <li className={headerStyles.li}>
                                <Link className={headerStyles.link} to='/about'>About</Link>
                            </li>
                            <li className={headerStyles.li}>
                                <Link className={headerStyles.link} to='/brewMethods'>Brew Methods</Link>
                            </li>
                            <li className={headerStyles.li}>
                                <Link className={headerStyles.link} to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div> : ""}
                </nav>
            </header>
        </div>
    )
}

export default Header
