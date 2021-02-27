// import React from "react"
// import { graphql } from "gatsby"
// import Layout from '../components/layout'
// import Test from '../components/test'
// import Card from '../components/card'




// const ComponentName = ({data}) => {
//     console.log("data",data.strapiPage.DynamicZone[0].CardImage)
    
//     return (
        
//         <Layout>
            
           
//             <div>
//                 <h1>{data.strapiPage.PageName}</h1>
//                     {data.strapiPage.DynamicZone.map(content => (
//                     <div>
                       
//                         <Test 
//                           props ={content.TestTitle}
//                         />
//                         <Card 
//                           title = {content.CardTitle}
//                           content = {content.CardContent}
//                           url = {content.CardImage.childImageSharp.fluid}
                        
//                           />
//                         {/* <h3 className="test">{content.testtitle}</h3>
//                         <p>{content.testtext}</p>
//                         <h3>{content.title}</h3>
//                         <p>{content.content}</p>
//                         <p>{content.caption}</p> */}
//                     </div>
          
          
//         ))}
             

                
//             </div>
//         </Layout>
//     )
  
// }
 
// export const query = graphql`
// query GetSinglePage($slug:String){
//     strapiPage(slug: {eq: $slug}) {
//       PageName
//        DynamicZone {
//           TestTitle
//           CardContent
//           CardTitle
//           CardImage {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
  
// `

// export default ComponentName