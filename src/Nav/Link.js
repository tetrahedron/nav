import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const A = styled(Stylable("a"))`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const Link = ({ to, newTab, ...props }) => (
  <A href={to} target={newTab ? "_blank" : null} {...props} />
);

Link.propTypes = {
  to: PropTypes.string,
  newTab: PropTypes.bool,
};

Link.defaultProps = {
  padding: "0 10px",
};

export default Link;
