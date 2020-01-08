const fs = require('fs')

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "entries"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: FrontMatter
      id: ID!
    }

    type FrontMatter {
      date: Date! @dateformat
      weather: Weather
      locations: [String]
    }
    
    type Weather {
      conditions: String!
      min: String!
      max: String!
    }
  `
  createTypes(typeDefs)
}