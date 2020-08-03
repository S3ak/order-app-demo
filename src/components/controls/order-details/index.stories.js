import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { OrderDetails } from "./index";
import { OrderListItem } from "./item";

import mockOrderDetailsList from "../../../utils/mocks/mock-order-details-list";

export default {
  title: "Controls/Order details",
  component: OrderDetails,
  decorators: [withKnobs],
};

export const Base = () => <OrderDetails list={mockOrderDetailsList} />;

export const Skeleton = () => <OrderDetails isLoading={true} />;

export const OrderListItemComponent = () => (
  <OrderListItem
    title={text("title", "demo title")}
    description={text("description", "demo description")}
  />
);
