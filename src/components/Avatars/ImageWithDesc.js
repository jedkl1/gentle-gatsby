import React from "react";
import PropTypes from "prop-types";

import "../../styles/Avatars/ImageWithDesc.scss";

const ImageWithDesc = ({ image, description }) => {
  return (
    <div className="strongPoint">
      <i className="material-icons md-64">{ image }</i>
      <span className="text text__normal md-16"> { description } </span>
    </div>
  )
};

ImageWithDesc.defaultProps = {
  image: `some text`,
  description: `some desc`,
};

ImageWithDesc.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};

export default ImageWithDesc