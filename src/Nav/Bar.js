import PropTypes from "prop-types";
import styled from "styled-components";
import { Stylable } from "@tetrahedron/core";

const Bar = styled(Stylable("nav"))`
  ${props => props.fixed && `position: fixed; left: 0; top: 0`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Bar.propTypes = {
  fixed: PropTypes.bool,
};

Bar.defaultProps = {
  width: "100%",
  height: "50px",
  padding: "0 10px",
  color: "white",
  background: "mediumslateblue",
};

export default Bar;
