import React from "react"

import "../../components/Common/SectionHeader"
import "../../styles/Components/ContactInfo.scss"

const ContactInfo = () => {
  const phone = "783 390 071"
  const email = "gentle.expeditions@gmail.com"
  const location = "Polska, Warszawa, Lublin, Kraków"
  return (
    <div className="container infoWrapper">
      <section-header text="Kontakt" />
      <div className="row infoSection">
        <i className="material-icons md-32"> phone </i>
        <span className="text text__bold md-32"> {phone}</span>
      </div>
      <div className="row infoSection">
        <i className="material-icons md-20"> email </i>
        <span className="text text__bold md-20"> {{ email }}</span>
      </div>
      <div className="row infoSection">
        <i className="material-icons md-20"> location_on </i>
        <span className="text text__bold md-20"> {{ location }}</span>
      </div>
    </div>
  )
}

export default ContactInfo
