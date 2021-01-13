import React from 'react'
import Layout from './components/layout'
import brewStyles from './brewMethods.module.css'

const brewMethods = () => {
    return (
        <Layout>
            <div className={brewStyles.brewPage}>
                <h1 className={brewStyles.heading}>My Brewing Methods</h1>
                <h3 className={brewStyles.subHeading}>Complete guide to brewing at home!</h3>
                <div className={brewStyles.container}>
                    <p>PAGE UNDER CONSTRUCTION</p>
                </div>
            </div>
        </Layout>
    )
}

export default brewMethods
