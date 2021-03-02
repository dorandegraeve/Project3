import React from "react"
import Layout from "../components/layout"
import {graphql} from 'gatsby'
import Pricecard from "../components/pricecard"

const PrijzenPage = ({data}) => (
  console.log("data",data),
  <Layout>
    {data.allStrapiPrice.nodes.map(price => (
      <Pricecard
      title = {price.title}
      price = {price.price}
      users = {price.users}
      admins = {price.admins}
      modules = {price.modules}
      moduleItem = {price.moduleItem}
      subtitle = {price.subtitle}
      popular = {price.popular}
      />
    ))}
    

  </Layout>
)

export default PrijzenPage

export const query = graphql`
  {
    allStrapiPrice {
      nodes {
        popular
        title
        price
        users
        admins
        modules
        subtitle
        moduleItem {
          moduleItem
          moduleImage {
            childImageSharp {
              fixed (width: 25){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  
`
