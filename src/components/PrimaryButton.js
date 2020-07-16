import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #000;
  color: var(--text-white);
  border: none;

  ${props =>
    props.primary &&
    css`
      background: var(--primary);
    `}
`

const PrimaryButton = props => {
  return <Button primary={props.primary}>{props.children}</Button>
}

export default PrimaryButton
