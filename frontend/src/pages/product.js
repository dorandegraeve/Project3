import React from "react"
import Layout from "../components/layout"
import Product from "../components/products"

const ProductPage = ({data}) => (
  console.log("data", data),
  <Layout>
    {data.allStrapiContent.nodes.map(content => (
          <Product
          title = {content.title}
          text = {content.text}
          subtitle = {content.subtitle}
          url = {content.image.childImageSharp.fixed}
          side = {content.rightSide}
          />
        ))}
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
}
`
