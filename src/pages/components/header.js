import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import headerStyles from './header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <div>
            <header>
                <nav>
                    <ul className={headerStyles.ul}>
                        <h1 className={headerStyles.headingTitle}>
                            <Link className={headerStyles.headingTitle} to='/'>{data.site.siteMetadata.title}</Link>
                        </h1>
                        {/* <li className={headerStyles.li}>
                            <Link className={headerStyles.link} to='/'>Home</Link>
                        </li> */}
                        <li className={headerStyles.li}>
                            <Link className={headerStyles.link} to='/about'>About</Link>
                        </li>
                        <li className={headerStyles.li}>
                            <Link className={headerStyles.link} to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
