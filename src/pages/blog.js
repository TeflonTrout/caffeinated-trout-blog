import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from './components/layout'
import blogStyle from './blog.module.css'

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
          <div className={blogStyle.page}>
            <h1 className={blogStyle.heading}>Blog Posts</h1>
            <ol className={blogStyle.posts}>
                {data.allContentfulTastingNotePost.edges.map(edge => {
                  return (
                    <li className={blogStyle.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.postDate}</p>
                            </Link>
                        </li>
                    )
                  })}
            </ol>
          </div>
        </Layout>            
    )
}

export default Blog
