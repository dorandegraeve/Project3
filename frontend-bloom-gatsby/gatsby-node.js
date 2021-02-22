const { graphql } = require('gatsby')
const path = require ('path')
 
const articles = [
    {id:1, title:"the first title", content:"tthe first content"},
    {id:2, title:"the second title", content:"tthe second content"},
    {id:3, title:"the third title", content:"tthe third content"}
]
 
exports.createPages = async ({ actions: {createPage}}) => {
    articles.forEach(({id, title, content}) => {
        createPage({
            path:`/articles/${id}` ,
            component: require.resolve("./src/templates/article") ,
            context: {
                id,
                title,
                content
            },
        })
    })
 
    graphql(`
        {
            allStrapiArticle {
                nodes {
                id
                title
                content
                }
            }      
        }
    `).then(result => {
        const allArticles = result.data.allStrapiArticle.nodes
        allArticles.forEach(({id, title, content}) => {
            createPage({
                path: `articles/strapi/${id}`,
                component: require.resolve("./src/templates/article"),
                context: {
                    id,
                    title,
                    content
                }
            })
        })
        console.log("Graphql.then result", result)})
}