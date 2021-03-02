import React from "react"
import Layout from "../components/layout"
import ContentHome from "../components/contentHome"
import {graphql} from 'gatsby'
import Nieuwsbrief from "../components/nieuwsbrief"


const ContactPage = ({data}) => (
  console.log("contact", data.allStrapiContentHomes),
  <Layout>
    
          <ContentHome
          title = {data.allStrapiContentHomes.nodes[1].title}
          content = {data.allStrapiContentHomes.nodes[1].content}
          span = {data.allStrapiContentHomes.nodes[1].span}
          button = {data.allStrapiContentHomes.nodes[1].buttonText}
          url = {data.allStrapiContentHomes.nodes[1].contentHomeImage.childImageSharp.fixed}
          input = {data.allStrapiContentHomes.nodes[1].input}
          />
        

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


