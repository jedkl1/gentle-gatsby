import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ExpeditionDay from "../components/Common/ExpeditionDay"

import "../styles/Templates/Article.scss"

const Article = ({ data: { allPrismicArticle } }) => {
  const [{ data: trip }] = allPrismicArticle.nodes
  console.log(trip)

  const days = trip.day_group.map((day, index) => {
    return (
      <ExpeditionDay
        key={`day${index}`}
        header={day.header.text}
        description={day.description.html}
        description2={day.description2.html}
        distance={day.distance.text}
        date={day.date.text}
        image={day.image}
        index={index}
      />
    )
  })

  return (
    <Layout>
      <SEO
        title="Gentle Expeditions"
        keywords={[
          `Czarnogóra`,
          `Rower`,
          `Expeditions`,
          `Poland`,
          `Slovakia`,
          `Bicycle`,
          `Gentle`,
          `Mens`,
          `Hungary`,
          `Croatia`,
          `Chorwacja`,
        ]}
      />
      <div className="article">
        <div className="article__title">{trip.title.text}</div>
        <div className="article__subtitle">{trip.countries.text}</div>
        <div className="article__content">{days}</div>
      </div>
    </Layout>
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
          countries {
            text
          }
          day_group {
            header {
              text
            }
            date {
              text
            }
            distance {
              text
            }
            description {
              html
            }
            description2 {
              html
            }
            image {
              url
              alt
            }
          }
        }
      }
    }
  }
`

export default Article
