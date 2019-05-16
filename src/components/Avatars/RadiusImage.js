import React from "react";
import PropTypes from "prop-types";
import "../../styles/Avatars/RadiusImage.scss";

const RadiusImage = ({ imageUrl, name, description, alt }) => {
  return (
    <div className="manWrapper">
      <img alt={ alt } className="avatar" src={imageUrl} />
      <span className="text text__bold md-20"> { name }</span>
      <span className="text text__normal md-16"> { description } </span>
    </div>
  )
};

RadiusImage.defaultProps = {
  imageUrl: `some url`,
  name: `some name`,
  description: `some description`,
  alt: `some alt`,
};

RadiusImage.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
};

export default RadiusImage