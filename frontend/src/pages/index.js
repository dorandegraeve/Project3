import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"

import Card from "../components/card"
import Nieuwsbrief from "../components/nieuwsbrief"
import ContentHome from "../components/contentHome"
import Video from "../components/video"



const IndexPage = ({ data}) => (
    console.log("data",data),
 <Layout>
   
    {data.allStrapiVideo.nodes.map(video => (
      <div className="video__container">
        <Video 
            url={video.videoUrl}
          
        />
      </div>
          
        ))}
      
    {data.allStrapiContentHomes.nodes.map(content => (
          <ContentHome
          title = {content.title}
          content = {content.content}
          span = {content.span}
          button = {content.buttonText}
          url = {content.contentHomeImage.childImageSharp.fixed}
          />
        ))}
    
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
    allStrapiContentHomes {
      nodes {
        title
        span
        content
        buttonText
        contentHomeImage {
          childImageSharp {
            fixed (width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }   
      allStrapiContent {
        nodes {
          title
          text
          image {
            childImageSharp  {
              fixed (width: 500){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
}
`

export default IndexPage


