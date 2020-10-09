module.exports = {
  siteMetadata: {
    title: `Designsystemet NAV`,
    description: `Dette er beskrivelsen av designsystemet`,
    author: `@navikt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        rehypePlugins: [require("rehype-toc")],
      },
    },
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
        name: `NAV Designsystem`,
        short_name: `NAV DS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `src/components/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `komponenter`,
        path: `${__dirname}/../packages`,
        ignore: [
          `!**/*.mdx`,
          `**/*.overview.mdx`,
          `**/*.accessibility.mdx`,
          `**/*.ingress.mdx`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
