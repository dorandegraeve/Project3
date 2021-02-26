import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
// import Video from "../components/video"

const IndexPage = ({data}) => (
  <Layout>
    {/* {console.log("test", data)}

            <Video
              // videoSrcURL={data.strapiPage.Content.url}
              // videoTitle={data.strapiPage.Content.VideoTitle}
            />

        {data.strapiPage.Content.map(content => (
          <div>
            {console.log("izbfpib", content.url)}
             
            <h3>{content.url}</h3>
            <h3 className="test">{content.testtitle}</h3>
            <p>{content.testtext}</p>
            <h3>{content.title}</h3>
            <p>{content.content}</p>
            <p>{content.caption}</p>
          </div>
          
          
        ))} */}

  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
query MyQuery {
  strapiPage(slug: {eq: "home"}) {
    Content {
      testtext
      testtitle
      caption
      VideoTitle
      url
      content
      title
      id
    }
  }
}

`

