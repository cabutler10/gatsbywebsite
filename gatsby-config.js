const config = require("./data/SiteConfig");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.siteGATrackingID
      }
    },
    // {
    //   resolve: `gatsby-plugin-feed`
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: "/src",
        background_color: "#999999",
        theme_color: "#FFE9E3",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};