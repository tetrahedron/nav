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

  *:nth-child(n + 2) {
    margin-left: 10px;
  }
`;

Title.defaultProps = {
  height: "100%",
};

export default Title;
