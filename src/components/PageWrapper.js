import React from "react"
import styled from "styled-components"

import HeaderLogo from "../components/HeaderLogo"

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 8rem;
`

const PageWrapper = props => {
  return (
    <Wrapper>
      <HeaderLogo />
      {props.children}
    </Wrapper>
  )
}

export default PageWrapper
