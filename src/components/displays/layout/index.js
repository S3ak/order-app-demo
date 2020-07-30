import React from "react";
import PT from "prop-types";
import { Wrapper, HeaderSection, BodySection } from "./styled";
import Container from "../container";
import Header from "../../controls/header";
import GlobalStyles from "../../../utils/styles/global-styles";

/**
 * The `BaseLayout` Component is used to structure the layout of the web page.
 * It utilises CSS grid to position content.
 * @author Monde Sineke <monde@gmail.com>
 */
export const BaseLayout = ({ children, HeaderContent }) => {
  return (
    <Wrapper>
      <HeaderSection>{HeaderContent}</HeaderSection>
      <BodySection>
        <Container>{children}</Container>
      </BodySection>
      <GlobalStyles />
    </Wrapper>
  );
};

BaseLayout.propTypes = {
  children: PT.node,
  /** Default header is used here */
  headerContent: PT.node,
};

BaseLayout.defaultProps = {
  HeaderContent: <Header />,
};

export default BaseLayout;
