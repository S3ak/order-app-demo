import React from "react";
import PT from "prop-types";

import { Wrapper, Title, Description } from "./styled";

export const OrderListItem = ({
  title = "item Name",
  description = "Item decription",
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

OrderListItem.propTypes = {
  title: PT.string,
  description: PT.string,
};

export default OrderListItem;
