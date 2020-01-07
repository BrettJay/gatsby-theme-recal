module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `entries`,
        path: `${__dirname}/entries/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      }
    },
    `gatsby-plugin-theme-ui`
  ]
}