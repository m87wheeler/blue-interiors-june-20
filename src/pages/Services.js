import React from "react"
import styled from "styled-components"
import serviceArray from "../assets/api/servicesArray"

import PageWrapper from "../components/PageWrapper"
import PageHeader from "../components/PageHeader.js"
import ServiceListing from "../components/ServiceListing"

const services = serviceArray.map(svc => {
  return (
    <ServiceListing
      key={svc.id}
      serviceTitle={svc.title}
      serviceImage={svc.image}
      serviceImageAlt={svc.imgAlt}
      description={svc.description.map(p => (
        <p>{p}</p>
      ))}
      servicesList={svc.servicesList.map(li => (
        <li>{li}</li>
      ))} // requires a key - not working
    />
  )
})

const Projects = props => {
  return (
    <PageWrapper>
      <PageHeader text="Services" />
      {services}
    </PageWrapper>
  )
}

export default Projects
