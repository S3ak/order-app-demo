import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

import Skeleton from "./Skeleton";

export const Header = ({
  isLoading,
  isError,
  title,
  ctaText,
  handleOnCTAAction,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper>
      <h1>{title}</h1> <button onClick={handleOnCTAAction}>{ctaText}</button>
    </Wrapper>
  );
};

Header.propTypes = {
  isLoading: PT.bool,
  isError: PT.bool,
  title: PT.node,
  ctaText: PT.string,
  onCTAAction: PT.func,
};

Header.defaultProps = {
  isLoading: false,
  isError: false,
  title: "Collect order",
  ctaText: "Help",
  handleOnCTAAction: () => console.warn("USer click the CTA"),
};

export default Header;
