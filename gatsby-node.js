/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPrismicArticle {
        nodes {
          slugs
          id
        }
      }
    }
  `).then(result => {
    console.log(result)
    result.data.allPrismicArticle.nodes.forEach(( node ) => {
      createPage({
        path: `expeditions/${node.slugs[0]}`,
        component: path.resolve(`./src/templates/Article.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slugs[0],
          id: node.id
        },
      })
    })
  })
}
