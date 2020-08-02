import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { Button } from "./index";


export default {
  title: "Controls/Button",
  component: Button,
  decorators: [withKnobs],
};

const kindOptions = ['default', 'text'];

// TODO: Add knobs as an example and to template
export const Base = () => (
  <Button kind={select("Kind", kindOptions, "default")}>Click me</Button>
);

export const text = () => <Button kind="text">Click me</Button>;
export const processing = () => <Button isProcessing>Click me</Button>;
export const success = () => <Button isSuccess>Click me</Button>;
export const failure = () => <Button isError>Click me</Button>;
export const Skeleton = () => <Button isLoading />;
