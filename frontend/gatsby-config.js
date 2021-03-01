module.exports = {
  siteMetadata: {
    title: `BLOOM`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://howest.us7.list-manage.com/subscribe/post?u=57c320b9e8609706fb5dc7d8b&amp;id=ea2f308a1b', // string; add your MC list endpoint here; see instructions below
          timeout: 3500 // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },

    {
      resolve: `gatsby-transformer-remark`,
      options: {

        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 10000,
        contentTypes: ['page','video','card','content-homes', 'content'],
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
