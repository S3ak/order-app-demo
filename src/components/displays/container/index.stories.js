import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Container } from "./index";

export default {
  title: "Displays/Container",
  component: Container,
  decorators: [withKnobs],
};

export const Base = () => (
  <Container>Please replace this text for testing purposes</Container>
);

export const Skeleton = () => <Container isLoading={true} />;
