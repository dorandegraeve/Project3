import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
// import Video from "../components/video"

const IndexPage = () => (
  <Layout>
   
  </Layout>
)

export default IndexPage
export const query = graphql`
query MyQuery {
  allStrapiVideo {
    nodes {
      videoUrl
    }
  }
}

  
`

