import React, { useState } from "react"
import styled from "styled-components"

const FlipInAndOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  cursor: pointer;
`

const FlipTileContainer = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-bottom: 0.5rem;
  perspective: 1000px;
  background: #eee;
`

const FlipTileInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const FlipTileFront = styled(FlipInAndOut)``

const FlipTileBack = styled(FlipInAndOut)`
  transform: rotateY(180deg);
`

const FlipTileImage = styled.img`
  width: 100%;
  filter: brightness(50%);
`

const FlipTileHeader = styled.h2`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  color: var(--text-white);
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: var(--ls-narrow);
`

const FlipTileDate = styled.span`
  display: block;
  font-size: 1rem;
`

const FlipTile = props => {
  const [flipTile, setFlipTile] = useState(false)

  const handleClick = () => {
    setFlipTile(!flipTile)
  }

  return (
    <FlipTileContainer onClick={handleClick}>
      <FlipTileInner style={flipTile ? { transform: "rotateY(180deg)" } : null}>
        <FlipTileFront>
          <FlipTileImage src={props.postImg} alt="Blog Or Project Link" />
          <FlipTileHeader>
            {props.title}
            <FlipTileDate className="publish-date">
              {props.postDate}
            </FlipTileDate>
          </FlipTileHeader>
        </FlipTileFront>
        <FlipTileBack
          style={
            props.backgroundColor
              ? { background: props.backgroundColor }
              : { backgroundImage: `url(${props.backgroundImg})` }
          }
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "0",
              width: "80%",
              marginLeft: "10%",
              color: "var(--text-white)",
            }}
          >
            <p
              style={
                props.backgroundColor
                  ? { color: "var(--text-white)" }
                  : { color: "var(--text-black)" }
              }
            >
              {props.blurb}
            </p>
            <p
              style={{
                letterSpacing: "0.1em",
                fontWeight: "700",
                marginTop: "1rem",
                color: props.backgroundColor
                  ? "var(--text-white)"
                  : "var(--text-black)",
              }}
            >
              READ MORE
            </p>
          </span>
        </FlipTileBack>
      </FlipTileInner>
    </FlipTileContainer>
  )
}

export default FlipTile
