import React from "react"
import Layout from "../components/layout"
import ContentHome from "../components/contentHome"
import {graphql} from 'gatsby'
import Nieuwsbrief from "../components/nieuwsbrief"
// import Video from "../components/video"

const ContactPage = ({data}) => (
  <Layout>
    {data.allStrapiContentHomes.nodes.map(content => (
          <ContentHome
          title = {content.title}
          content = {content.content}
          span = {content.span}
          button = {content.buttonText}
          url = {content.contentHomeImage.childImageSharp.fixed}
          />
        ))}

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


