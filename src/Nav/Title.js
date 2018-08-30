import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const Title = styled(Stylable("div"))`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  img,
  svg {
    height: 100%;
  }
`;

Title.defaultProps = {
  height: "100%",
};

export default Title;
