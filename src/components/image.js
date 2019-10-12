import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


export const AlgopitDesktopImage = () => {
  const data = useStaticQuery(graphql`
    query {
      algopitImage: file(relativePath: {eq: "AlgopitLogo@3x.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Img fluid={data.algopitImage.childImageSharp.fluid} />;
};

export const AlgopitMobileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "AlgopitLogo@3x.png" }) {
        childImageSharp {
          fixed(width: 150, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} />;
};
