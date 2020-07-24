import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./PrimaryButton"

const ListingContainer = styled.div`
  padding: 5vh 5%;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5vw;
    grid-template-rows: 60px auto 80px auto;
    grid-template-areas:
      "service-title service-title"
      "service-text  service-image"
      "service-text  service-button"
      "service-text  .";
  }
`
const ListingHeader = styled.h4`
  width: 100%;
  font-size: 1.5em;
  line-height: 0.8em;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: $text;
  border-bottom: 3px solid $primaryDark;
  margin-bottom: 4vh;

  @media (min-width: 880px) {
    grid-area: service-title;
  }
`
const ServiceImage = styled.div`
  & img {
    width: 100%;
  }

  @media (min-width: 880px) {
    grid-area: service-image;
  }
`

const ServiceText = styled.div`
  & p {
    text-align: justify;
    margin-bottom: 4vh;
  }

  & ul {
    margin-left: 20%;
    list-style-type: disc;
    margin-bottom: 4vh;
  }

  @media (min-width: 880px) {
    grid-area: service-text;

    & ul {
      margin-left: 10%;
    }
  }
`

const ServiceEnquiry = styled(Button)`
  @media (min-width: 800px) {
    grid-area: service-button;
    max-height: 47px;
  }
`

function ServiceListing(props) {
  return (
    <ListingContainer>
      <ListingHeader>{props.serviceTitle}</ListingHeader>
      <ServiceImage>
        <img src={props.serviceImage} alt={props.serviceImageAlt} />
      </ServiceImage>
      <ServiceText>
        {props.description}
        <p>When you opt for this package you will receive:</p>
        <ul>{props.servicesList}</ul>
      </ServiceText>
      <Link to="/contact">
        <ServiceEnquiry primary>Make An Enquiry</ServiceEnquiry>
      </Link>
    </ListingContainer>
  )
}

export default ServiceListing
