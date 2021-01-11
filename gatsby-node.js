const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`./src/pages/templates/blog.js`)
    const res = await graphql(`
        query {
            allContentfulTastingNotePost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulTastingNotePost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}`,
            component: blogTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    })
}