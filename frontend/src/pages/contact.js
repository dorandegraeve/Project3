import React from "react"
import Layout from "../components/layout"
import ContentHome from "../components/contentHome"
import {graphql} from 'gatsby'
import Nieuwsbrief from "../components/nieuwsbrief"
import Demo from "../components/demo"



const ContactPage = ({data}) => (
  console.log("contact", data.allStrapiContentHomes),
  <Layout>
      <div className="contact">
        <ContentHome
          title = {data.allStrapiContentHomes.nodes[0].title}
          content = {data.allStrapiContentHomes.nodes[0].content}
          span = {data.allStrapiContentHomes.nodes[0].span}
          button = {data.allStrapiContentHomes.nodes[0].buttonText}
          url = {data.allStrapiContentHomes.nodes[0].contentHomeImage.childImageSharp.fixed}
          input = {data.allStrapiContentHomes.nodes[0].input}
          />
      </div>
        

        

    <div className="nieuwsbrief__contact">

    
      <Nieuwsbrief/>
   
    
    </div>

  </Layout>
  
)


export default ContactPage
export const query = graphql`
  {
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

}
`


