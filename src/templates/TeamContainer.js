import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import "../styles/Templates/TeamContainer.scss";
import SectionHeader from '../components/Common/SectionHeader';
import RadiusImage from "../components/Avatars/RadiusImage";

const TeamContainer = () => {
  const { prismicAvatars } = useStaticQuery(
    graphql`
      query {
        prismicAvatars {
          id
          data {
            title {
              text
            }
            avatarsarr {
              traveler {
                url
                dimensions {
                  width
                  height
                }
                alt
                copyright 
              }
              name {
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
  const content = prismicAvatars.data.avatarsarr.map((avatar, index) =>
    <RadiusImage
      key={`avatar-${index}`}
      alt={avatar.traveler.alt}
      name={avatar.name.text}
      description={avatar.description.text}
      imageUrl={avatar.traveler.url}
    />
  );
  return (
    <div className="container teamContainer">
      <SectionHeader text="Nasz zespół"/>
      <div className="row wrap">
        { content }
      </div>
    </div>
  )
}

export default TeamContainer