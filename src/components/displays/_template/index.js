import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

import Skeleton from "./Skeleton";

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

export default GenericComponent;
