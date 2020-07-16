import React from "react"
import styled from "styled-components"

import landingImage from "../assets/images/hero-images/hero-mobile.png"
import mainLogo from "../assets/images/vector-images/logo384.png"
import LandingText from "./LandingText"

const LandingSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  @media (min-width: 800px) {
    height: 90vh;
  }
`

const LangingImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @media (min-width: 600px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  @media (min-width: 800px) {
    top: 20vh;
    left: 38%;
    width: 85%;
    height: 60vh;
  }
  @media (min-width: 1200px) {
    left: 50%;
    width: 50%;
  }
`

const LandingImage = styled.img`
  position: absolute;
  top: 0;
  left: -15%;
  height: 100%;
  width: auto;
  filter: brightness(0.6);
  @media (min-width: 600px) {
    width: 100%;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    height: auto;
  }
  @media (min-width: 800px) {
    left: 0;
    width: 100%;
    height: auto;
    filter: brightness(1);
  }
`

const PositionLandingText = styled(LandingText)`
  display: none;
  @media (min-width: 800px) {
    display: block;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    width: 80%;
    max-height: 30rem;
    height: auto;
    z-index: 10;
  }
  @media (min-width: 1280px) {
    width: 35%;
  }
`

const LogoContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 19rem;
  @media (min-width: 800px) {
    top: 2rem;
    height: 9rem;
  }
  @media (min-width: 1280px) {
    position: fixed;
    top: 0;
    height: 11rem;
    padding-top: 1rem;
    background: white;
    z-index: 10;
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

const Landing = props => {
  return (
    <LandingSection>
      <PositionLandingText />
      <LangingImageContainer>
        <LandingImage src={landingImage} alt="home interior" />
      </LangingImageContainer>
      <LogoContainer>
        <MainLogo src={mainLogo} alt="Blue Interiors Logo" />
        <LogoText>
          <span style={{ display: "none" }}>Blue</span> Interiors
        </LogoText>
      </LogoContainer>
    </LandingSection>
  )
}

export default Landing
