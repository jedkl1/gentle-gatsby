import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Article = ( props ) => {
  const { allPrismicArticle } = useStaticQuery(
    graphql`
      query($slug: ${props.pageContext.slug}) {
        allPrismicArticle(filter: { slug: { eq: $slug } }) {
          edges {
            node {
              id
              slugs
              data {
                title {
                  text
                }
                expedition_place {
                  text
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(allPrismicArticle)
  return (
    <div>
      adsadas
    </div>
  )
}

export default Article
