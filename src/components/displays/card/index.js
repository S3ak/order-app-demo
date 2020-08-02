import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

import Skeleton from "./Skeleton";

/**
 * The `Card` Component is common component used to display information and an intent.
 * @author Monde Sineke <monde@gmail.com>
 */
export const Card = ({ children, isLoading, isError }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return <Wrapper>{children}</Wrapper>;
};

Card.propTypes = {
  children: PT.node,
  isLoading: PT.bool,
  isError: PT.bool,
};

Card.defaultProps = {
  isLoading: false,
  isError: false,
};

export default Card;
