import React from "react";
import PT from "prop-types";
import { BsArrow90DegRight } from "react-icons/bs";
import { MdCall } from "react-icons/md";

import {
  Wrapper,
  Title,
  Description,
  ControlSection,
  HeadingSection,
} from "./styled";

import Skeleton from "./Skeleton";
import Card from "../../displays/card";
import Button from "../../controls/button";

const handleOnDirectionAction = () =>
  console.warn("User clicked on directions button");
const handleOnCallAction = () => console.warn("User clicked on call action");

/**
 * The `OrderAddress` Component indicates to collection address.
 * @author Monde Sineke <monde@gmail.com>
 */
export const OrderAddress = ({
  isLoading,
  isError,
  title = "McDonald’s Rondebosch",
  description = "51 Main Rd, Rondebosch, Cape Town, 7700",
  onDirectionsAction = handleOnDirectionAction,
  onCallAction = handleOnCallAction,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Card>
      <Wrapper>
        <HeadingSection>
          <Title>{title}</Title>

          <Description>{description}</Description>
        </HeadingSection>

        <ControlSection>
          <Button
            Icon={<BsArrow90DegRight />}
            kind="secondary"
            intentType="danger"
            onClick={onDirectionsAction}
          >
            Directions
          </Button>

          <Button
            Icon={<MdCall />}
            kind="secondary"
            intentType="danger"
            onClick={onCallAction}
          >
            Call
          </Button>
        </ControlSection>
      </Wrapper>
    </Card>
  );
};

OrderAddress.propTypes = {
  isLoading: PT.bool,
  isError: PT.bool,
  title: PT.string,
  description: PT.string,
  onDirectionsAction: PT.func,
  onCallAction: PT.func,
};

export default OrderAddress;
