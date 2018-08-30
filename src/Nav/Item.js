import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const Item = styled(Stylable("div"))`
  display: inline-flex;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

Item.defaultProps = {
  padding: "0 10px",
};

export default Item;
