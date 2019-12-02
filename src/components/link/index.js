import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
// eslint-disable-next-line react/prop-types
const Link = ({ children, to, activeClassName, replace, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  // eslint-disable-next-line no-constant-condition
  if (false && internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        replace={replace}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
