/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import './layout.css';

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #1850F7;
  color: white;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  font-family: 'Poppins', Helvetica, sans-serif;
`;

const Layout = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
