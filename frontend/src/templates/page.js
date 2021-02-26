import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'




const ComponentName = ({data}) => {
    
    return (
        
        <Layout>
            
           
            <div>
                <h1>{data.strapiPage.Title}</h1>
                {data.strapiPage.Content.map(content => (
                    <div>
                        <h3>{content.url}</h3>
                        <h3 className="test">{content.testtitle}</h3>
                        <p>{content.testtext}</p>
                        <h3>{content.title}</h3>
                        <p>{content.content}</p>
                        <p>{content.caption}</p>
                    </div>
          
          
        ))}
             

                
            </div>
        </Layout>
    )
  
}
 
export const query = graphql`
query GetSinglePage($slug:String){
    strapiPage(slug: {eq: $slug}) {
      Title
      Content {
        testtext
        testtitle
        caption
        VideoTitle
        url
        content
        title
        id
      }
    }
  }
`

export default ComponentName