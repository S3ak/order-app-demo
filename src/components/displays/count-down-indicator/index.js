import React from "react";
import { useTimeoutFn } from "react-use";
import PT from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

import {
  Wrapper,
  OuterCircle,
  Figure,
  InnerCircle,
  Time,
  Description,
  Icon,
} from "./styled";

import Skeleton from "./Skeleton";

const _INITIAL_OFFSET = 25;

const circleConfig = {
  viewBox: "0 0 38 38",
  x: "19",
  y: "19",
  radio: "15.91549430918954",
};

const convertToPercentage = (val, maxVal = 30) => {
  return ((maxVal - val) / maxVal) * 100;
};

const getProgressColor = (val) => {
  let color = "#00C853";

  switch (true) {
    case val < 50:
      color = "#00C853";
      break;

    case val >= 50 && val <= 83:
      color = "#ffac00";
      break;

    default:
      color = "#ff0000";
      break;
  }

  return color;
};

/**
 * The `CountDownIndicator` Component is to show ime left to accept incoming delivery.
 * @author Monde Sineke <monde@gmail.com>
 */
export const CountDownIndicator = ({
  duration,
  isLoading,
  isError,
  strokeColor = "#979797",
  innerText = "to accept",
  strokeWidth = "2",
  isSuccess,
  isFailure,
  delay = 2000,
  timeLeft,
  startFn,
}) => {
  const formattedTime = timeLeft ? timeLeft / 1000 : duration / 1000;
  const percentage = isSuccess
    ? 0
    : isFailure
    ? 100
    : convertToPercentage(formattedTime, duration / 1000);

  const trailStrokeColor = getProgressColor(percentage);
  const springProps = useSpring({ value: percentage, formattedTime });

  const strokeDasharray = springProps.value.interpolate(
    (v) => `${v} ${100 - v}`
  );

  useTimeoutFn(startFn, delay);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper onClick={() => startFn()}>
      <OuterCircle>
        <Figure>
          <svg viewBox={circleConfig.viewBox}>
            <circle
              className="ring"
              cx={circleConfig.x}
              cy={circleConfig.y}
              r={circleConfig.radio}
              fill="transparent"
              stroke-width={strokeWidth}
              stroke={trailStrokeColor}
            />

            <animated.circle
              className="path"
              cx={circleConfig.x}
              cy={circleConfig.y}
              r={circleConfig.radio}
              fill="transparent"
              stroke={strokeColor}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={_INITIAL_OFFSET}
              stroke-width={strokeWidth}
            />
          </svg>
        </Figure>

        <InnerCircle hasOffset={isSuccess || isFailure}>
          {isSuccess && (
            <Icon>
              <FaCheck />
            </Icon>
          )}

          {isFailure && (
            <Icon>
              <FaTimes />
            </Icon>
          )}

          {!isSuccess && !isFailure && (
            <>
              <Time>{formattedTime.toFixed()}</Time>
              <Description>{innerText}</Description>
            </>
          )}
        </InnerCircle>
      </OuterCircle>
    </Wrapper>
  );
};

CountDownIndicator.propTypes = {
  time: PT.number,
  isLoading: PT.bool,
  isError: PT.bool,
  isAccepted: PT.bool,
  isFailure: PT.bool,
};

export default CountDownIndicator;
