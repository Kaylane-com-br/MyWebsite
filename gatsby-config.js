module.exports = {
  siteMetadata: {
    siteUrl: "https://www.kaylane.com.br",
    title: "kaylane.com.br",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
};
