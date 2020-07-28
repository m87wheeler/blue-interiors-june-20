import React from "react"
import styled from "styled-components"

import MainLogo from "../components/MainLogo"
import landingImage from "../assets/images/hero-images/hero-mobile.png"
import LandingText from "./LandingText"

const LandingSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: -10rem;

  @media (min-width: 800px) {
    height: calc(90vh - 10rem);
    z-index: 9;
  }
`

const LangingImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 999;

  @media (min-width: 600px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  @media (min-width: 800px) {
    top: calc(50% - 15.25rem);
    left: 38%;
    width: 85%;
    height: 60vh;
    z-index: 99;
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

const LandingMainLogo = styled(MainLogo)`
  position: relative;
  width: 100%;
  height: 100%;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & img,
  & h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  & img {
    top: 8rem;
    width: 16rem;
    height: 16rem;
    filter: brightness(1000%);
  }

  & h1 {
    top: 25rem;
    font-size: 2.2rem;
    color: var(--text-white);
  }

  @media (min-width: 800px) {
    display: none;
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

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 35%;
  }
`

const Landing = () => {
  return (
    <LandingSection>
      <PositionLandingText />
      <LangingImageContainer>
        <LandingImage src={landingImage} alt="home interior" />
        <LandingMainLogo />
      </LangingImageContainer>
    </LandingSection>
  )
}

export default Landing
