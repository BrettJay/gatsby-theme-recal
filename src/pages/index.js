import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Calendar from "../components/calendar"
import { graphql } from "gatsby"

const Log = ({ data }) => (
  <Layout>
    <Helmet title="Log"/>
    <Calendar
      entries={data.allMdx.nodes}
      images={data.allFile.edges}/>
  </Layout>
)

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          locations
          weather {
            conditions
            max
            min
          }
        }
        parent {
          ... on File {
            name
            relativeDirectory
          }
        }
        body
      }
    }
    allFile(filter: {extension: {eq: "jpg"}, sourceInstanceName: {eq: "entries"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Log