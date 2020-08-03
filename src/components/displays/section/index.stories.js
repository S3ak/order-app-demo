import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Section } from "./index";

export default {
  title: "Displays/Section",
  component: Section,
  decorators: [withKnobs],
};

export const Base = () => <Section>Inside the section</Section>;
