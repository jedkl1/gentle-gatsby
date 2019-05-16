import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from "../components/Common/SectionHeader";
import ImageWithDesc from "../components/Avatars/ImageWithDesc";

import "../styles/Templates/StrongPointsContainer.scss";

const StrongPointsContainer = () => {
  const { prismicStrongpoint } = useStaticQuery(
    graphql`
      query {
        prismicStrongpoint {
          data {
            point {
              material_icon {
                text
              }
              description {
                text
              }
            }
          }
        }
      }
    `
    );
   const content = prismicStrongpoint.data.point.map((point, index) =>
     <ImageWithDesc description={point.description.text} image={point.material_icon.text} key={`point-${index}`}/>
   );
    return (
      <div className="container strongPoints">
        <SectionHeader text="Dlaczego warto się z nami wybrać"/>
        <div className="row wrap">
          { content }
        </div>
      </div>
    )
};

export default StrongPointsContainer