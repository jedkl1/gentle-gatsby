import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../styles/Components/TopBar.scss"

const TopBar = () => {
  const { prismicTopbar } = useStaticQuery(
    graphql`
      query {
        prismicTopbar {
          data {
            page_title {
              text
            }
            page_logo {
              url
            }
            sociallogo {
              logo_url {
                url
              }
              social_name {
                text
              }
              social_tag {
                text
              }
              social_link {
                url
              }
            }
          }
        }
      }
    `
  )
  const logos = prismicTopbar.data.sociallogo.map((logo, index) => (
    <a
      className="social__link"
      target="_blank"
      key={`social logo ${index}`}
      href={logo.social_link.url}
    >
      <img
        alt={logo.social_name.text + logo.social_tag.text}
        src={logo.logo_url.url}
      />
      <span className={"tag"}> { logo.social_tag.text }</span>
    </a>
  ))
  return (
    <div id="top" className="top">
      <div className="left">
        <Link to="/">
          <img className="avatar" src={ prismicTopbar.data.page_logo.url} />
          {prismicTopbar.data.page_title.text}
        </Link>
      </div>
      <div className="right">{logos}</div>
    </div>
  )
}

export default TopBar
