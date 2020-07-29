import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

import Skeleton from "./Skeleton";

const DefaultChildren = () => <div>content goes here</div>;

/**
 * The `GenericComponent` Component is used as a default template for copying and pasting.
 * @author Monde Sineke <monde@gmail.com>
 */
export const GenericComponent = ({ children, isLoading, isError }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return <Wrapper>{children}</Wrapper>;
};

GenericComponent.propTypes = {
  children: PT.node,
  isLoading: PT.bool,
  isError: PT.bool,
};

GenericComponent.defaultProps = {
  children: <DefaultChildren />,
  isLoading: true,
  isError: false,
};

export default GenericComponent;
