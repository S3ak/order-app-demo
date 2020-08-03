import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { OrderAddress } from "./index";

export default {
  title: "Controls/Order address",
  component: OrderAddress,
  decorators: [withKnobs],
};

export const Base = () => (
  <OrderAddress
    title={text("title", "mock title")}
    description={text("description", "mock address")}
  />
);

export const Skeleton = () => <OrderAddress isLoading={true} />;
