import React from "react"
import PropTypes from "prop-types"
import "../../styles/Components/ExpeditionDay.scss"

const ExpeditionDay = props => {
  return (
    <div className="content__day">
      <div className="content__day__header">
        <div className="header__text"> {props.header}</div>
        <span className="header__date"> {props.date}</span>
        <span className="header__distance"> {props.distance}</span>
      </div>
      <div className="content__day__description">
        <div className="description__text description__text--first" dangerouslySetInnerHTML={{__html: props.description}}/>
        <img
            className={
              "description__image description__image" +
              (props.index % 2 === 0 ? "--right" : "--left")
            }
            src={props.image.url}
            alt={props.image.alt}
        />
        <div className="description__text" dangerouslySetInnerHTML={{__html: props.description2}} />
      </div>
    </div>
  )
}

ExpeditionDay.defaultProps = {
  header: `some header`,
  description: `some desc`,
  description2: `some desc`,
  distance: `some dist`,
  date: `some date`,
  image: { url: "", alt: "some photo" },
  index: 0,
}

ExpeditionDay.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  distance: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.number,
}

export default ExpeditionDay
