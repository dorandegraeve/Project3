import React from "react"
import Layout from "../components/layout"
import Product from "../components/products"
import TekstImage from "../components/tekstImage"
import Nieuwsbrief from "../components/nieuwsbrief"
import SEO from "../components/seo"

const ProductPage = ({data}) => (
  console.log("data", data),
  <Layout>
    <SEO title="Product"/>
          <TekstImage 
          title = {data.strapiTekstImage.title}
          text = {data.strapiTekstImage.text}
          img = {data.strapiTekstImage.image.childImageSharp.fixed}
          />
    {data.allStrapiContent.nodes.map(content => (
          <Product
          title = {content.title}
          text = {content.text}
          subtitle = {content.subtitle}
          url = {content.image.childImageSharp.fixed}
          side = {content.rightSide}
          />
        ))}
        <Nieuwsbrief/>

  </Layout>
)

export default ProductPage

export const query = graphql`
  {
      allStrapiContent(sort: { fields: [id], order: ASC })  {
        nodes {
          id
          title
          text
          subtitle
          rightSide
          image {
            childImageSharp  {
              fixed (width: 500){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      strapiTekstImage {
        title
        text
        image {
          childImageSharp {
            fixed (width: 500){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
}
`
