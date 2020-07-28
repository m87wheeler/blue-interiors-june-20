import React from "react"
import styled from "styled-components"

import mainLogo from "../assets/images/vector-images/logo384.png"

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 11rem;
  padding-top: 1rem;
  text-align: center;
  z-index: 99;

  @media (min-width: 800px) {
    top: 3rem;
    left: 15%;
    transform: none;
    width: 9.6rem;
    height: 9.6rem;
    padding: 0;
  }

  @media (min-width: 1280px) {
    top: 1rem;
    position: fixed;
    background: transparent;
  }
`

const MainLogoImage = styled.img`
  width: 8rem;
  height: 8rem;

  @media (min-width: 800px) {
    display: block;
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
  font-weight: 300;
  font-size: 1.25rem;
  margin-top: -0.5rem;
  margin-left: 0.4rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: var(--ls-normal);
  z-index: 999;

  @media (min-width: 800px) {
    font-size: 1rem;
    top: 7.25rem;
    margin: 0;
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

const MainLogo = ({ className }) => (
  <LogoContainer className={className}>
    <MainLogoImage src={mainLogo} alt="Blue Interiors Logo" />
    <LogoText>INTERIORS</LogoText>
  </LogoContainer>
)

export default MainLogo
