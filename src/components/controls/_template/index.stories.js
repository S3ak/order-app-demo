import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { GenericComponent } from "./index";

export default {
  title: "Controls/Template",
  component: GenericComponent,
  decorators: [withKnobs],
};

export const Base = () => (
  <GenericComponent>
    Please replace this text for testing purposes
  </GenericComponent>
);

export const Skeleton = () => <GenericComponent isLoading={true} />;
