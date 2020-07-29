import React from "react";
import PT from "prop-types";
import { Wrapper, HeaderSection, BodySection } from "./styled";

import Skeleton from "./Skeleton";

/**
 * The `BaseLayout` Component is used to structure the layout of the web page.
 * It utilises CSS grid to position content.
 * @author Monde Sineke <monde@gmail.com>
 */
export const BaseLayout = ({ children, isLoading, isError, headerContent }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper>
      <HeaderSection>{headerContent}</HeaderSection>
      <BodySection>{children}</BodySection>
    </Wrapper>
  );
};

BaseLayout.propTypes = {
  children: PT.node,
  isLoading: PT.bool,
  isError: PT.bool,
  /** Default header is used here */
  headerContent: PT.node,
};

BaseLayout.defaultProps = {
  isLoading: true,
  isError: false,
};

export default BaseLayout;
