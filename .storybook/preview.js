import React from "react";
import { addDecorator } from "@storybook/react";
import WithGlobalStyles from "../src/utils/storybook-decorators/with-global-styles";

addDecorator((storyFn) => (
  <div>
    <WithGlobalStyles />
    {storyFn()}
  </div>
));
