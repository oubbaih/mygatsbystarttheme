require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //wordpress setup url
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${process.env.WORDPRESS_SITE_URL}graphql`,
      },
    },
    //image inline setup
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: process.env.WORDPRESS_SITE_URL,
        uploadsUrl: `${process.env.WORDPRESS_SITE_URL}wp-content/uploads/}`,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: process.env.CUSTOM_URL_API_TO_FETCH_DATA_EXTERNAL,
      },
    },
    // /* ////google analytics setup */
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
    //   },
    // },
    // //setup or google font
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       process.env.FONT_NAME_FIRST,
    //       process.env.FONT_NAME_SECOND
    //     ],
    //     display: "swap",
    //   },
    // },
    //setup custom api data to gatsby

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
