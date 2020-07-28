import React from "react"
import styled from "styled-components"

const BlogFrontContainer = styled.div`
  display: block;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 3rem;
  height: 90vh;
  padding: 20px 0;
  background: white;

  & .post-image {
    display: block;
    width: 100%;
    height: auto;

    & img {
      min-width: 100%;
      min-height: 100%;
      width: 100%;
    }

    @media (min-width: 912px) {
      display: block;
      width: inherit;
      height: 232px;
      overflow: hidden;
    }
  }

  & .category {
    position: relative;
    margin-top: 10px;
    width: 100%;

    & .category-border {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      border-top: 1px solid #566573;
    }

    & h4 {
      padding-top: 0.1em;
      font-size: 1em;
      color: #566573;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.1em;
    }
  }

  & h1 {
    margin-top: 20px;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
    color: #000;
  }

  & .published-date {
    margin: 10px 0 20px;
    color: #9aa9b7;
    font-style: italic;
  }

  & .post-blurb {
    font-size: 1.1em;
    color: #000;
  }

  & .read-more {
    display: block;
    font-weight: 700;
    font-size: 0.9em;
    color: #566573;
    letter-spacing: 0.1em;
    color: #566573;
  }

  @media (min-width: 600px) {
    height: auto;
    margin-bottom: 5vh;
  }

  @media (min-width: 1200px) {
    width: 100%;
    height: 550px;
  }
`

const BlogFront = props => {
  return (
    <BlogFrontContainer>
      <div className="post-image">
        <img
          src={props.imgsrc}
          alt={"A photograph representing the topic of the blog post"}
        />
      </div>
      <div className="category">
        <div className="category-border"></div>
        <h4>{props.category}</h4>
      </div>
      <h1>{props.title}</h1>
      <p className="published-date">
        <span>Posted </span>
        {props.published}
      </p>
      <p className="post-blurb">
        {props.blurb}
        <span className="read-more"> READ MORE</span>
      </p>
    </BlogFrontContainer>
  )
}

export default BlogFront
