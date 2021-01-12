import React from 'react'
import Header from './header'
import Footer from './footer'
import Helmet from './helmet'
import layoutStyles from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <Helmet />
            <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
