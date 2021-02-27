import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Video from "../components/video"
import Card from "../components/card"
import Nieuwsbrief from "../components/nieuwsbrief"


const IndexPage = ({ data}) => (
    console.log("data",data),
 <Layout>
   {data.allStrapiVideo.nodes.map(video => (
        <Video 
          videoSrcURL={video.videoUrl}
         
      />
      ))}
    <Video 
      videoSrcURL={data.allStrapiVideo.nodes.videoUrl}
      videoTitle="Official Music Video on YouTube"
    />
  <div className="card__container">
    {data.allStrapiCard.nodes.map(kaart => (
        <Card 
          title = {kaart.cardTitle}
          content = {kaart.cardContent}
          url = {kaart.cardImage.childImageSharp.fixed}
        />
      ))}
  </div>
      <Nieuwsbrief />
   
   
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
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
   
  }
`

export default IndexPage


