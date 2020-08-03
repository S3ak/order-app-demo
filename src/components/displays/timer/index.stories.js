import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Timer } from "./index";

export default {
  title: "Displays/Timer",
  component: Timer,
  decorators: [withKnobs],
};

const Card = ({ children }) => <div>{children}</div>;

export const Base = () => (
  <Card>
    <Timer
      time={text("time", "08:05")}
      description={text("description", "Minutes remaining")}
    />
  </Card>
);

export const Skeleton = () => <Timer isLoading={true} />;
