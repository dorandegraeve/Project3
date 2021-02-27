import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Video from "../components/video"
import Card from "../components/card"


const IndexPage = ({ data}) => (
    console.log("data",data),
 <Layout>
  
    {data.allStrapiVideo.nodes.map(video => (
      <Video 
      videoSrcURL= {video.videoUrl}/>
    ))}

    {data.allStrapiCard.nodes.map(kaart => (
      <Card 
        title = {kaart.cardTitle}
        content = {kaart.cardContent}
        url = {kaart.cardImage.childImageSharp.fluid}
      />
    ))}
   
 </Layout>
)
  
export const query = graphql`
  {
    allStrapiVideo {
      nodes {
        videoUrl
      }
    }
    allStrapiCard {
      nodes {
        cardTitle
        cardContent
        cardImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
   
  }
`

export default IndexPage


