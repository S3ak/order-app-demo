import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Header } from "./index";

export default {
  title: "Controls/Header",
  component: Header,
  decorators: [withKnobs],
};

export const Base = () => <Header />;

export const Skeleton = () => <Header isLoading={true} />;
