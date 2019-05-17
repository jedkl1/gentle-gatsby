import React from "react"
import { graphql,  } from "gatsby"

const Article = ( { data: { allPrismicArticle }  } ) => {

  console.log(allPrismicArticle)
  return (
    <div>
      adsadas
    </div>
  )
}

export const pageQuery =
  graphql`
      query($id: String!) {
        allPrismicArticle(filter: { id: { eq: $id } }) {
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

export default Article
