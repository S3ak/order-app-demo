import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import { Button } from "./index";

export default {
  title: "Controls/Button",
  component: Button,
  decorators: [withKnobs],
};

const kindOptions = ["default", "text", "circle"];
const statusOptions = ["default", "danger", "success"];

// TODO: Add knobs as an example and to template
export const Base = () => (
  <Button
    kind={select("Kind", kindOptions, "default")}
    status={select("Status", statusOptions, "default")}
    isProcessing={boolean("Is processing", false)}
    isLoading={boolean("Is loading", false)}
    isError={boolean("has error", false)}
    isSuccess={boolean("Is success", false)}
  >
    {text("Button content", "click me")}
  </Button>
);

export const Processing = () => <Button isProcessing>Click me</Button>;
export const Failure = () => <Button isError>Click me</Button>;
export const Skeleton = () => <Button isLoading />;
