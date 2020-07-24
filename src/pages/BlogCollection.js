import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { dateFormat } from "../assets/logic/dateFormat"

import BlogFront from "../components/BlogFront"
import PageWrapper from "../components/PageWrapper"
import PageHeader from "../components/PageHeader.js"

const BlogCollectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 6%;
  }
`

const BlogCollection = props => {
  const blogArray = props.data.map(post => {
    return (
      <Link to={`blog/${post.slug}`} key={post.slug}>
        <BlogFront
          imgsrc={post.metadata.post_image.imgix_url}
          category={post.metadata.post_category}
          published={dateFormat(post.metadata.published)}
          title={post.title}
          blurb={post.metadata.post_blurb}
        />
      </Link>
    )
  })

  return (
    <PageWrapper>
      <PageHeader text="Blog" />
      <BlogCollectionContainer>
        {props.loading ? <p>Loading...</p> : blogArray}
      </BlogCollectionContainer>
    </PageWrapper>
  )
}

export default BlogCollection
