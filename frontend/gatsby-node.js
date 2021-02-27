// const path = require('path')

// // create pages dynamically
// exports.createPages = async ({graphql,actions}) =>{
//     const {createPage} = actions
//     const result = await graphql(`
//     query MyQuery {
//         allStrapiPage {
//             nodes {
//                 slug
//             }
//         }
//     }
// `)
//     result.data.allStrapiPage.nodes.forEach((page)=>{
//         createPage({
//             path:`/${page.slug}`,
//             component: path.resolve(`src/templates/page.js`),
//             context: {
//                 slug:page.slug,
//             }
//         })
//     })
    
// }