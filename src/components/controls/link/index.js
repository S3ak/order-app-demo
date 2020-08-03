import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

export const Link = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Link.propTypes = {
  children: PT.node,
};

export default Link;
