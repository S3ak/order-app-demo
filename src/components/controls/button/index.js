import React from "react";
import PT from "prop-types";
import { Wrapper, IconWrapper } from "./styled";

import Skeleton from "./Skeleton";

/** the ``Button` compnent is used to trigger javascript
 * actions and not redirecting the user to a different url
 * */
export const Button = ({
  children,
  isLoading,
  isError,
  isProcessing,
  isSuccess,
  isFullWidth,
  Icon,
  kind,
  intentType,
  onClick,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isProcessing) {
    return <div>loading...</div>;
  }

  if (isSuccess) {
    return <div>Great!</div>;
  }

  return (
    <Wrapper
      kind={kind}
      intentType={intentType}
      onClick={onClick}
      isFullWidth={isFullWidth}
    >
      {Icon && <IconWrapper>{Icon}</IconWrapper>}
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PT.node.isRequired,
  Icon: PT.node,
  kind: PT.oneOf(["text", "default"]),
  intentType: PT.oneOf(["danger", "primary", "secondary"]),
  isLoading: PT.bool,
  isError: PT.bool,
  isProcessing: PT.bool,
  isSuccess: PT.bool,
  /** Makes button take up 100% width inside parent element */
  isFullWidth: PT.bool,
  onClick: PT.func.isRequired,
};

export default Button;
