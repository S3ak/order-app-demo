import React from "react";

import { Card } from "./index";

export default {
  title: "Displays/Card",
  component: Card,
};

export const Base = () => (
  <Card>
    Usually some text goes here
  </Card>
);

export const Skeleton = () => <Card isLoading={true} />;
