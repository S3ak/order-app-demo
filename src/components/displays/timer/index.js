import React from "react";
import PT from "prop-types";
import { Wrapper, Heading, Body, Indicator } from "./styled";

import ProgressBar from "../progress-bar";

import Card from "../card";

import Skeleton from "./Skeleton";

/**
 * The `Timer` Component is used to display how much time the dirver has left.
 * @author Monde Sineke <monde@gmail.com>
 */
export const Timer = ({
  isLoading,
  isError,
  errorMsg = "Something went wrong",
  time,
  description,
  currentProgressVal,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>{errorMsg}</div>;
  }

  return (
    <Card>
      <Wrapper>
        <Heading>{time}</Heading>

        <Body>{description}</Body>

        <Indicator>
          <ProgressBar currentVal={currentProgressVal} />
        </Indicator>
      </Wrapper>
    </Card>
  );
};

Timer.propTypes = {
  children: PT.node,
  isLoading: PT.bool,
  isError: PT.bool,
  errorMsg: PT.string,
  time: PT.string,
  description: PT.string,
  currentProgressVal: PT.string,
};

export default Timer;
