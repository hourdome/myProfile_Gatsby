/**
 * @type {import('gatsby').GatsbyConfig}
 */

const author = {
  name: 'Tunpisit Saengmueng',
  jobTitle: 'Software Engineer',
  description: 'Software Engineer',
  nationality: 'Thai',
  gender: 'male',
  email: 'mailto:saengmueng_90@hotmail.com'
}

const authorSocial = {
  github: 'https://github.com/hourdome',
  twitter: 'https://twitter.com/HourDome',
  youtube: ['https://www.youtube.com/@HourDome', 'https://www.youtube.com/channel/UC8kT2rSJZg7Gu7oPsAIcF6g'],
  twitch: 'https://www.twitch.tv/hourdome',
  pixiv: 'https://www.pixiv.net/en/users/20202553',
  facebook: 'https://www.facebook.com/HourDome',
}

const siteMetadata = {
  title: `My Site`,
  siteUrl: `https://www.yourdomain.tld`,
  siteName: `HOURDOME`,
  author,
  authorSocial,

}


module.exports = {
  siteMetadata,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }],
  pathPrefix: "/myProfile_Gatsby"
};