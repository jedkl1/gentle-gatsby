import React from "react"
import { graphql } from "gatsby"

const Article = ({ data: { allPrismicArticle } }) => {
  const [{ data: trip }] = allPrismicArticle.nodes
  console.log(trip)
  return (
    <div className="article">
      <div className="article__title">{trip.title.text}</div>
      <div className="article__subtitle">{trip.countries.text}</div>
      <div className="article__content">
        <div className="article__content__day">

        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    allPrismicArticle(filter: { id: { eq: $id } }) {
      nodes {
        id
        slugs
        data {
          title {
            text
          }
          expedition_place {
            text
          }
          image {
            alt
            url
          }
          countries {
            text
          }
          description {
            text
          }
        }
      }
    }
  }
`

export default Article
