import React from "react";
import PT from "prop-types";
import { Wrapper, HeaderSection, BodySection } from "./styled";
import Container from "../container";

/**
 * The `BaseLayout` Component is used to structure the layout of the web page.
 * It utilises CSS grid to position content.
 * @author Monde Sineke <monde@gmail.com>
 */
export const BaseLayout = ({ children, headerContent }) => {
  return (
    <Wrapper>
      <Container>
        <HeaderSection>{headerContent}</HeaderSection>
        <BodySection>{children}</BodySection>
      </Container>
    </Wrapper>
  );
};

BaseLayout.propTypes = {
  children: PT.node,
  /** Default header is used here */
  headerContent: PT.node,
};

BaseLayout.defaultProps = {};

export default BaseLayout;
