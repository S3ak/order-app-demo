import React, { useState } from "react";
import PT from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";
import useCountDown from "react-countdown-hook";
import LongPressable from "react-longpressable";

import CountDownIndicator from "../../displays/count-down-indicator";
import Button from "../../controls/button";

import {
  Wrapper,
  HeadingSection,
  Title,
  DescriptionSection,
  FooterSection,
  ButtonGroup,
  ControlDescription,
  ButtonContainer,
  Legend,
} from "./styled";

import Skeleton from "./Skeleton";

/**
 * The `IncomingDeliveryIntent` Component asks the driver to accept a new delivery.
 * @author Monde Sineke <monde@gmail.com>
 */
export const IncomingDeliveryIntent = ({
  isLoading,
  isError,
  errorMsg = "Something went wrong",
  title = "New delivery",
  duration = 30 * 1000, // initial time in milliseconds, defaults to 60000
  interval = 1000, // interval to change remaining time amount, defaults to 1000
}) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const [timeLeft, start] = useCountDown(duration, interval);

  const handleOnIntentAction = (decision) => {
    if (isAccepted || isDeclined) {
      return;
    }

    if (decision === "decline") {
      setIsDeclined(true);
    }

    if (decision === "accept") {
      setIsAccepted(true);
    }
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>{errorMsg}</div>;
  }

  const conditionalTitle = isAccepted
    ? "Let's go!"
    : isDeclined
    ? "Next time chief"
    : title;

  const conditionalDescription = isAccepted
    ? "Loading your delivery"
    : isDeclined
    ? ""
    : "Press and hold for a moment to accept";

  return (
    <Wrapper>
      <HeadingSection>
        <Title>{conditionalTitle}</Title>
      </HeadingSection>

      <DescriptionSection>
        <CountDownIndicator
          timeLeft={timeLeft}
          duration={duration}
          isSuccess={isAccepted}
          isFailure={isDeclined}
          startFn={start}
        />
      </DescriptionSection>

      <FooterSection>
        {!isAccepted && !isDeclined && (
          <ButtonGroup>
            <ButtonContainer>
              <LongPressable
                onLongPress={() => handleOnIntentAction("decline")}
                longPressTime={700}
              >
                <Button onClick={() => null} kind="circle" status="muted">
                  <FaTimes />
                </Button>
              </LongPressable>

              <Legend>Decline</Legend>
            </ButtonContainer>

            <ButtonContainer>
              <LongPressable
                onLongPress={() => handleOnIntentAction("accept")}
                longPressTime={700}
              >
                <Button onClick={() => null} kind="circle" status="success">
                  <FaCheck />
                </Button>
              </LongPressable>

              <Legend>Accept</Legend>
            </ButtonContainer>
          </ButtonGroup>
        )}

        <ControlDescription>{conditionalDescription}</ControlDescription>
      </FooterSection>
    </Wrapper>
  );
};

IncomingDeliveryIntent.propTypes = {
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

export default IncomingDeliveryIntent;
