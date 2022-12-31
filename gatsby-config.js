module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
        pathPrefix: "/gaurislabnotes.github.io",
      },
    },
  ],
  siteMetadata: {
    title: `Site title`,
  },
}
