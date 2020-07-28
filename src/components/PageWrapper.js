import React from "react"
import styled from "styled-components"

import mainLogo from "../assets/images/vector-images/logo384.png"

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 8rem;
  background: red;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 19rem;
  height: 19rem;
  z-index: 99;

  @media (min-width: 800px) {
    top: 1rem;
    left: 15%;
    transform: none;
    width: 9.6rem;
    height: 9.6rem;
  }

  @media (min-width: 1280px) {
    position: fixed;
    top: 1rem;
    left: 15%;
  }
`

const MainLogo = styled.img`
  display: block;
  width: 15rem;
  height: 15rem;
  margin-left: 2rem;
  filter: brightness(1000%);

  @media (min-width: 800px) {
    width: 7rem;
    height: 7rem;
    margin-left: 1.3rem;
    filter: none;
  }
  @media (min-width: 1280px) {
    top: 0;
  }
`

const LogoText = styled.h1`
  top: 15.5rem;
  left: 0;
  font-weight: 300;
  font-size: 2.5rem;
  color: var(--text-white);
  text-transform: uppercase;
  letter-spacing: var(--ls-normal);
  margin-left: 1.6rem;

  @media (min-width: 800px) {
    font-size: 1rem;
    top: 7.25rem;
    margin-left: 0.4rem;
    color: var(--primary);
    font-weight: 400;
  }

  @media (min-width: 1280px) {
    left: 0;
    top: 7rem;
    display: inline-block;
    width: 9.25rem;
  }
`

const PageWrapper = props => {
  return (
    <Wrapper>
      <LogoContainer>
        <MainLogo src={mainLogo} alt="Blue Interiors Logo" />
        <LogoText>
          <span style={{ position: "absolute", top: "-99999px" }}>Blue</span>
          Interiors
        </LogoText>
      </LogoContainer>
      {props.children}
    </Wrapper>
  )
}

export default PageWrapper
