import React from "react"
import styled from "styled-components"

import mainLogo from "../assets/images/vector-images/logo384.png"

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 8rem;
  background: seagreen;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 19rem;
  z-index: 99;

  @media (min-width: 800px) {
    top: 2rem;
    height: 9rem;
  }
  @media (min-width: 1280px) {
    position: fixed;
    top: 0;
    left: 15%;
    width: auto;
    height: auto;
  }
`

const MainLogo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;
  @media (min-width: 800px) {
    filter: brightness(0);
    width: auto;
    height: 7rem;
  }
  @media (min-width: 1280px) {
    top: 1rem;
    left: calc(0.9rem + 15%);
    transform: none;
  }
`

const LogoText = styled.h1`
  position: absolute;
  top: 15.5rem;
  left: 0;
  width: 100%;
  font-weight: 300;
  font-size: 2.5rem;
  color: var(--text-white);
  text-transform: uppercase;
  letter-spacing: var(--ls-normal);
  text-align: center;
  @media (min-width: 800px) {
    font-size: 1rem;
    top: 7.25rem;
    color: var(--text-black);
  }
  @media (min-width: 1280px) {
    left: 15%;
    top: 8.25rem;
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
