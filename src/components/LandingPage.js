import React from "react"
import styled from "styled-components"

import landingImage from "../assets/images/hero-images/hero-mobile.png"
import mainLogo from "../assets/images/vector-images/logo384.png"

const LandingSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`

const LandingImage = styled.img`
  height: 100%;
  margin-left: -15%;
  filter: brightness(0.6);
`

const LogoContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 19rem;
`

const MainLogo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;
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
`

const Landing = props => {
  return (
    <LandingSection>
      <LandingImage src={landingImage} alt="home interior" />
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
