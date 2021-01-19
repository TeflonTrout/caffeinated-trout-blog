import React from "react"
import { Link } from 'gatsby'
import Layout from './components/layout'
import '../pages/styles/index.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="home-page">
          <div className="hero">
            <h2>Welcome!</h2>
            <Link to='/blog'>Have a look around!</Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
