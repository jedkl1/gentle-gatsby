import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import "../styles/Components/Header.scss";

const Header = () => {
  const { prismicHeaderbackground } = useStaticQuery(
    graphql`
      query {
        prismicHeaderbackground {
          data {
            main_text {
              text
            }
            submain_text {
              text
            }
            image {
              url
            }
          }
        }
      }
    `
  );
  const data = prismicHeaderbackground.data;
  console.log(data);
  return (
    <div className="header" style={{ backgroundImage: `linear-gradient(
      to right bottom,
      rgba(165, 165, 165, 0.6),
      rgba(140, 140, 140, 0.6)),
      url(${data.image.url}) `}}>
      <div className="text_box">
        <span className="md-64 main"> { data.main_text.text } </span>
        <span className="md-32 sub"> { data.submain_text.text } </span>
      </div>
      <div className="arrow_expand animated">
        <i className="material-icons md-64"> expand_more </i>
      </div>
    </div>
  )
};

export default Header