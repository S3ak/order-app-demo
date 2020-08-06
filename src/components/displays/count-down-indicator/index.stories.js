import React from "react";
import {
  withKnobs,
  number,
  boolean,
  text,
  color,
} from "@storybook/addon-knobs";

import { CountDownIndicator } from "./index";

export default {
  title: "Displays/Count down indicator",
  component: CountDownIndicator,
  decorators: [withKnobs],
};

const DURATION = 30;

const timeLeftOptions = {
  range: true,
  min: 0,
  max: DURATION,
  step: 1,
};

export const Base = () => (
         <CountDownIndicator
           timeLeft={
             number(
               "time remaining (Milliseconds)",
               DURATION,
               timeLeftOptions
             ) * 1000
           }
           isSuccess={boolean("Success state")}
           isFailure={boolean("isFailure", false)}
           isLoading={boolean("isLoading", false)}
           isError={boolean("isError", false)}
           duration={number("Duration", DURATION) * 1000}
           strokeColor={color("strokeColor", "#979797")}
           innerText={text("innerText", "to accept")}
           strokeWidth={text("strokeWidth", "2")}
         />
       );

export const Skeleton = () => <CountDownIndicator isLoading={true} />;
