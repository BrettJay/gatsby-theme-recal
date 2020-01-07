const fs = require('fs')

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "entries"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: FrontMatter
    }

    type Frontmatter {
      date: Date!
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