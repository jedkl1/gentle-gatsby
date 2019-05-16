import React from "react";
import PropTypes from "prop-types";
import "../../styles/Components/SectionHeader.scss";

const SectionHeader = ({ text }) => {
  return (
    <div className="sectionHeader">
      <div className="column">
        <div className="row wrap">
          <h2> { text } </h2>
        </div>
        <hr/>
      </div>
    </div>
)
};

SectionHeader.defaultProps = {
  text: `some text`,
};

SectionHeader.propTypes = {
  text: PropTypes.string,
};

export default SectionHeader