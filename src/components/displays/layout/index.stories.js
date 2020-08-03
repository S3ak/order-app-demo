import React from "react";

import { BaseLayout } from "./index";

export default {
  title: "Displays/Layout",
  component: BaseLayout,
};

const MockHeaderContent = () => <div>header goes here</div>;

export const Base = () => (
  <BaseLayout isLoading={false} headerContent={<MockHeaderContent />}>
    body content
  </BaseLayout>
);

export const Skeleton = () => <BaseLayout isLoading={true} />;
