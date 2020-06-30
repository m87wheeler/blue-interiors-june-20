import React from "react"
import { Link } from "react-router-dom"
import styled, { css, keyframes } from "styled-components"

const NavContainer = styled.nav`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  height: 0;
  overflow: hidden;
  z-index: 10;
  transition: all 0s linear;
  transition-delay: 0.2s;

  ${props =>
    props.navIsOpen &&
    css`
      height: calc(100vh - 2rem);
      transition: all 0s linear;
    `}
`

const NavExpand = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  background: rgba(var(--primary-rgb), 0.98);
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  z-index: 5;

  ${props =>
    props.navIsOpen &&
    css`
      transform: scaleX(50) scaleY(50);
    `}
`

const closeAnim = keyframes`
    from   {
       margin-top: 10%;
    }
    to {
        margin-top: -100vh;
    }
`

const openAnim = keyframes`
  from {
    margin-top: -100vh;
  }
  to {
    margin-top: 10%;
  }
`

const NavUnorderedList = styled.ul`
  position: relative;
  width: 80%;
  height: 80%;
  margin: 10%;
  animation: ${closeAnim} 0s linear forwards;
  animation-delay: 0.3s;
  opacity: 0;
  transition: opacity 0.1s ease;
  z-index: 10;

  ${props =>
    props.navIsOpen &&
    css`
      opacity: 1;
      animation: ${openAnim} 0s linear forwards;
    `}
`

const NavLink = styled.li`
  position: relative;
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: var(--ls-normal);
  color: var(--text-white);
  text-align: center;
`

const MainNav = props => {
  return (
    <NavContainer navIsOpen={props.navIsOpen}>
      <NavUnorderedList navIsOpen={props.navIsOpen}>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link to="/services">
          <NavLink>Services</NavLink>
        </Link>
        <Link to="/projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="/blog">
          <NavLink>Blog</NavLink>
        </Link>
        <Link to="/inspiration">
          <NavLink>Inspiration</NavLink>
        </Link>
        <Link to="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </NavUnorderedList>
      <NavExpand navIsOpen={props.navIsOpen} />
    </NavContainer>
  )
}

export default MainNav
