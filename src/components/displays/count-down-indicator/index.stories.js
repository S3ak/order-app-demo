import React from "react";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";

import { CountDownIndicator } from "./index";

export default {
  title: "Displays/Count down indicator",
  component: CountDownIndicator,
  decorators: [withKnobs],
};

export const Base = () => (
  <CountDownIndicator
    time={number("time remaining", 30)}
    isSuccess={boolean("Success state")}
    isFailure={boolean("isFailure", false)}
    isLoading={boolean("isLoading", false)}
    isError={boolean("isError", false)}
    duration={number("time remaining", 30)}
    strokeColor={text("strokeColor", "#979797")}
    innerText={text("innerText", "to accept")}
    strokeWidth={text("strokeWidth", "2")}
  />
);

export const Skeleton = () => <CountDownIndicator isLoading={true} />;
