import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { ProgressBar } from "./index";

export default {
  title: "Displays/Progress bar",
  component: ProgressBar,
  decorators: [withKnobs],
};

export const Base = () => (
  <ProgressBar currentVal="0.6" />
);

export const Skeleton = () => <ProgressBar isLoading={true} />;
