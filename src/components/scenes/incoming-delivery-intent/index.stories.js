import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { IncomingDeliveryIntent } from "./index";

export default {
  title: "Pages/Incoming delivery intent",
  component: IncomingDeliveryIntent,
  decorators: [withKnobs],
};

export const Base = () => (
  <IncomingDeliveryIntent>
    Please replace this text for testing purposes
  </IncomingDeliveryIntent>
);

export const Skeleton = () => <IncomingDeliveryIntent isLoading={true} />;
