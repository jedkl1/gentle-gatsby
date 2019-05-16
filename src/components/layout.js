/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import TopBar from "../templates/TopBar"

//import "./layout.css"
import "../styles/Components/layout.scss"
import "material-design-icons/iconfont/material-icons.css"
import "../styles/main.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={"layout"}>
        <TopBar />
        <main>{children}</main>
        <div className="footer">
          <span> &#9400; Gentle Expeditions 2016-2019 </span>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
