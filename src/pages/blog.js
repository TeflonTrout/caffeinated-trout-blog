import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from './components/layout'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulTastingNotePost (sort: {
          fields: postDate,
          order: DESC
        }) {
          edges{
            node {
              slug
              title
              postDate (formatString:"MMMM  Do, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Blog Posts</h1>
            <ol>
                {data.allContentfulTastingNotePost.edges.map(edge => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.postDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>            
    )
}

export default Blog
