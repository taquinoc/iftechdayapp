import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"


const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
          }
        }
      }
    }
    `)

    const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({node: {frontmatter: { background, category, date, description, title}, timeToRead}}) => (
        <PostItem
        slug="/about/"
        background={background}
        category={category}
        date={date}
        timeToRead={timeToRead}
        title={title}
        description={description}

      />
      ))}
      <h1>Home</h1>
      
    </Layout>

  )
}



export default IndexPage
