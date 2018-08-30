import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const Right = styled(Stylable("div"))`
  display: flex;
`;

Right.defaultProps = {
  height: "100%",
};

export default Right;
