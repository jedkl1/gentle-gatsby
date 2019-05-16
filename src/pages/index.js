import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../templates/Header"
import StrongPointsContainer from "../templates/StrongPointsContainer"
import TeamContainer from "../templates/TeamContainer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Gentle Expeditions" keywords={[`Wyprawy`, `Rower`, `Expeditions`, `Poland`, `Adventure`, `Bicycle`, `Gentle`, `Mens`]} />
    {/*<h1>Hi people</h1>*/}
    {/*<p>Welcome to your new Gatsby site.</p>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*<Image />*/}
    {/*</div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
    <Header />
    <StrongPointsContainer />
    <TeamContainer />
  </Layout>
)

export default IndexPage
