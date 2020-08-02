import React, { useState } from "react";
import PT from "prop-types";
import {
  Wrapper,
  HeadingSection,
  Title,
  DescriptionSection,
  Description,
  FooterSection,
  ButtonGroup,
} from "./styled";

import Skeleton from "./Skeleton";

const mockGlobalState = {
  href: "/",
  msg: `You can set initialProp value here`,
};

/**
 * The `GenericComponent` Component is used as a default template for
 * copying and pasting. It serve as example of a component using local state
 * which can connect to global state if you need it.
 * @author Monde Sineke <monde@gmail.com>
 */
export const GenericComponent = ({
  children,
  isLoading,
  isError,
  errorMsg = "Something went wrong",
  title,
  initialState = mockGlobalState,
}) => {
  const [state, setState] = useState(initialState);

  const handleOnAction = () => {
    console.warn("User clicked");
    setState();
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>{errorMsg}</div>;
  }

  return (
    <Wrapper>
      <HeadingSection>
        <Title>{title}</Title>
      </HeadingSection>

      <DescriptionSection>
        <Description>{children}</Description>
      </DescriptionSection>

      <FooterSection>
        <ButtonGroup>
          <button onClick={handleOnAction}>Click me</button>

          <a href={state?.href}>Maybe click me</a>
        </ButtonGroup>
      </FooterSection>
    </Wrapper>
  );
};

GenericComponent.propTypes = {
  children: PT.node,
  /** This flag determines if the user see's the shimmering blank shapes animation effect
   * you see on facebook. It relies on the skeleton subcomponent.
   */
  isLoading: PT.bool,
  isError: PT.bool,
  /** The message should originate from the api response.
   * ErrorBoundary parent component will catch application bugs */
  errorMsg: PT.string,
  /** You can connect this component to global state via props */
  state: PT.string,
  title: PT.string,
};

export default GenericComponent;
