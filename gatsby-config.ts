import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    LAZY_IMAGES: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `Test Calm`,
    siteUrl: `http://localhost:8000/`,
	  author: `Armag`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `${__dirname}/src/assets/favicon.png`,
      lang: 'ru',
      start_url: '/',
    },
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },

    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "carousel",
        path: `${__dirname}/src/assets/images/carousel`,
      },

    }, "gatsby-plugin-postcss", {
        resolve: "gatsby-plugin-sitemap",
        options: {
          host: 'http://localhost:8000',
          output: "/sitemap.xml/",
        },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },

    }, "gatsby-transformer-json", "gatsby-plugin-htaccess", {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        },
      },
    }, {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'blue',
        showSpinner: false,
      },
    }, {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://localhost:8000',
        sitemap: 'http://localhost:8000/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
  ],
};

export default config;
