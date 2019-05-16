import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../styles/Components/SectionHeader.scss"

const TopBar = () => {
  return (
    <div id="top" className="top">
      <div className="left">
        <Link to="/">
          <img className="avatar" src="logoSrc" />
          Gentle Expeditions
        </Link>
      </div>
      <div className="right">
        <a
          className="socialImage"
          target="_blank"
          href="`https://www.facebook.com/${gentleFbPath}/`"
        >
          <img alt="`@${gentleFbPath}`" src="fbLogo" />
          @geexp
        </a>
        <a
          className="socialImage"
          target="_blank"
          href="`https://www.instagram.com/${gentleInstPath}/`"
        >
          <img alt="`@${gentleInstPath}`" src="instaLogo" />
          @gentleexpeditions
        </a>
      </div>
    </div>
  )
}

TopBar.defaultProps = {
  text: `some text`,
}

TopBar.propTypes = {
  text: PropTypes.string,
}

export default TopBar
