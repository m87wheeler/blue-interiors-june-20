import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #fff;
  color: var(--text-black);
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  ${props =>
    props.primary &&
    css`
      background: var(--primary);
      color: var(--text-white);
    `}

  ${props =>
    props.center &&
    css`
      display: block;
      margin: 0 auto;
    `}

    ${props =>
      props.wide &&
      css`
        display: block;
        margin: 0 auto;
        width: 100%;
      `}
`

const PrimaryButton = props => {
  return (
    <Button center={props.center} primary={props.primary} wide={props.wide}>
      {props.children}
    </Button>
  )
}

export default PrimaryButton
