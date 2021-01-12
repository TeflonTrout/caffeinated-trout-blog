import React from 'react'
import { Helmet } from 'react-helmet'

const helmet = () => {
    return (
        <Helmet>
          <meta charSet="utf-8" />
          <title>Caffeinated Trout</title>
          <link rel="canonical" href="caffeinatedtrout.netlify.app" />
        </Helmet>
    )
}

export default helmet
