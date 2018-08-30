import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const Link = styled(Stylable("a"))`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

Link.defaultProps = {
  padding: "0 10px",
};

export default Link;
