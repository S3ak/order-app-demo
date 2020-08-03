import React from "react";
import PT from "prop-types";
import { FaCheck } from "react-icons/fa";

import {
  Wrapper,
  Heading,
  HeadingIcon,
  Body,
  InstructionsSection,
  InstructionsTitle,
  InstructionsDescription,
  List,
} from "./styled";

import Skeleton from "./Skeleton";

import OrderListItem from "./item";

export const OrderDetails = ({
  isLoading,
  isError,
  list = [],
  orderNo = "093",
  instructions = `
    Go to counter 1 on the left where
     the sign for ‘all pickups’ is
  `,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper>
      <Heading>
        <HeadingIcon>
          <FaCheck />
        </HeadingIcon>
        Collect Order #{orderNo}
      </Heading>

      <Body>
        <InstructionsSection>
          <InstructionsTitle>Pick up instructions</InstructionsTitle>

          <InstructionsDescription>{instructions}</InstructionsDescription>
        </InstructionsSection>

        <List>
          {list.map(({ id, title, description }) => (
            <OrderListItem key={id} title={title} description={description} />
          ))}
        </List>
      </Body>
    </Wrapper>
  );
};

OrderDetails.propTypes = {
  isLoading: PT.bool,
  isError: PT.bool,
  orderNo: PT.number,
  instructions: PT.string,
  list: PT.arrayOf(
    PT.shape({
      title: PT.string,
      description: PT.string,
    })
  ),
};

export default OrderDetails;
