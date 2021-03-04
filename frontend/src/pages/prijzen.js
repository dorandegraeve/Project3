import React from "react"
import Layout from "../components/layout"
import {graphql} from 'gatsby'
import Pricecard from "../components/pricecard"
import SEO from "../components/seo"

const PrijzenPage = ({data}) => (
  console.log("data",data),
  <Layout>
    <SEO title="Prijzen"/>
    <div className="prijzen">
    <h1 className="prijzen__title">Voor ieder wat wils</h1>
    <div className="prijzen__text">
    <p>We bieden verschillende pakketten aan zodat jij je mensen de</p>
    <p>beste ondersteuning kan geven die bij hen past.
    </p></div>
    
    </div>
    <div className="priceCard-container">
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
    </div>
    
    

  </Layout>
)

export default PrijzenPage

export const query = graphql`
  {
    allStrapiPrice (sort: { fields: [id], order: ASC }){
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
