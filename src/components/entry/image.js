import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const PlaceImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {extension: {eq: "jpg"}, sourceInstanceName: {eq: "entries"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.allFile.edges.find(n => {
        return n.node.relativePath.includes(props.date);
      });
      if (!image) { return null; }
      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <Img
          alt={props.alt}
          fluid={imageFluid}
        />
      );
    }}
  />
)

export default PlaceImage