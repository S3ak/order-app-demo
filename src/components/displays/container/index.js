import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

/**
 * The `Container` Component is used to contain content within a maximum width.
 * @author Monde Sineke <monde@gmail.com>
 */
export const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

Container.propTypes = {
  children: PT.node,
};

export default Container;
