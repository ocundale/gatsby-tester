// import React, { useMemo } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';
// import PropTypes from 'prop-types';

// const Image = ({ src, ...props }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
//         edges {
//           node {
//             relativePath
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//             publicURL
//           }
//         }
//       }
//     }
//   `);

//   const match = useMemo(
//     () => data.allFile.edges.find(({ node }) => src === node.relativePath),
//     [data, src]
//   );
//   const image = match.node;
//   const sharp = !!image && !!image.childImageSharp;

//   return sharp ? (
//     <Img fluid={image.childImageSharp.fluid} {...props} />
//   ) : (
//     <img src={image.publicURL} alt={props.alt} />
//   );
// };

// Image.propTypes = {
//   src: PropTypes.node.isRequired,
//   alt: PropTypes.node.isRequired,
// };

// export default Image;
