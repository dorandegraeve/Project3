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
      
    <ContentHome
          title = {data.allStrapiContentHomes.nodes[1].title}
          content = {data.allStrapiContentHomes.nodes[1].content}
          span = {data.allStrapiContentHomes.nodes[1].span}
          button = {data.allStrapiContentHomes.nodes[1].buttonText}
          url = {data.allStrapiContentHomes.nodes[1].contentHomeImage.childImageSharp.fixed}
          input = {data.allStrapiContentHomes.nodes[1].input}
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
    allStrapiContentHomes {
      nodes {
        title
        span
        content
        buttonText
        input
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


