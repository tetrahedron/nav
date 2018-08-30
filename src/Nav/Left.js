import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const Left = styled(Stylable("div"))`
  display: flex;
`;

Left.defaultProps = {
  height: "100%",
};

export default Left;
